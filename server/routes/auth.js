import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role, phone } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with this email'
            });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password,
            role: role || 'student',
            phone
        });

        // Generate token
        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            message: 'Registration successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                digilockerVerified: user.digilockerVerified
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Registration failed',
            error: error.message
        });
    }
});

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email and password'
            });
        }

        // Find user and include password
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Check password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Update last login
        user.lastLogin = new Date();
        await user.save({ validateBeforeSave: false });

        // Generate token
        const token = generateToken(user._id);

        res.json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                digilockerVerified: user.digilockerVerified,
                manualVerified: user.manualDocuments?.verified || false
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Login failed',
            error: error.message
        });
    }
});

// @route   GET /api/auth/me
// @desc    Get current logged in user
// @access  Private
router.get('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        res.json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
                avatar: user.avatar,
                digilockerVerified: user.digilockerVerified,
                digilockerData: user.digilockerData,
                manualDocuments: user.manualDocuments,
                studentDetails: user.studentDetails,
                centerDetails: user.centerDetails,
                createdAt: user.createdAt
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get user data',
            error: error.message
        });
    }
});

// @route   POST /api/auth/google
// @desc    Handle Google OAuth login/signup from frontend
// @access  Public
router.post('/google', async (req, res) => {
    try {
        console.log('Google auth request received:', req.body);
        const { googleId, email, name, avatar } = req.body;

        if (!googleId || !email) {
            console.log('Missing googleId or email');
            return res.status(400).json({
                success: false,
                message: 'Google ID and email are required'
            });
        }

        // Check if user already exists with this Google ID
        console.log('Looking for user with googleId:', googleId);
        let user = await User.findOne({ googleId });

        if (!user) {
            // Check if user exists with same email
            console.log('Looking for user with email:', email);
            user = await User.findOne({ email });

            if (user) {
                // Link Google account to existing user
                console.log('Linking Google to existing user');
                user.googleId = googleId;
                user.avatar = avatar || user.avatar;
                user.isEmailVerified = true;
                await user.save({ validateBeforeSave: false });
            } else {
                // Create new user
                console.log('Creating new user');
                user = new User({
                    googleId,
                    name,
                    email,
                    avatar,
                    role: 'student',
                    isEmailVerified: true
                });
                await user.save({ validateBeforeSave: false });
                console.log('New user created:', user._id);
            }
        } else {
            console.log('User found with googleId:', user._id);
        }

        // Update last login
        user.lastLogin = new Date();
        await user.save({ validateBeforeSave: false });

        // Generate token
        const token = generateToken(user._id);
        console.log('Token generated successfully');

        res.json({
            success: true,
            message: 'Google login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                digilockerVerified: user.digilockerVerified,
                manualVerified: user.manualDocuments?.verified || false
            }
        });
    } catch (error) {
        console.error('Google auth error:', error);
        console.error('Error stack:', error.stack);
        res.status(500).json({
            success: false,
            message: 'Google authentication failed',
            error: error.message
        });
    }
});

export default router;
