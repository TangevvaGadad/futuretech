# Email Notification Setup

## Environment Variables Required

Add these variables to your `.env` file:

```env
# Database Configuration
DATABASE_URL="your-neon-connection-string-here"

# Email Configuration
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
NOTIFICATION_EMAIL="your-notification-email@gmail.com"
```

## Email Setup Instructions

### For Gmail (Recommended):

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password as `EMAIL_PASS`

3. **Set Email Variables:**
   - `EMAIL_USER`: Your Gmail address (e.g., "yourname@gmail.com")
   - `EMAIL_PASS`: The app password you generated
   - `NOTIFICATION_EMAIL`: The email where you want to receive notifications (can be the same as EMAIL_USER)

### For Other Email Providers:

**Outlook/Hotmail:**
```env
EMAIL_USER="your-email@outlook.com"
EMAIL_PASS="your-password"
```

**Yahoo:**
```env
EMAIL_USER="your-email@yahoo.com"
EMAIL_PASS="your-app-password"
```

## Testing

After setting up the environment variables, restart your development server:

```bash
npm run dev
```

The email notifications will be sent automatically when someone submits either contact form.

## Troubleshooting

- **Authentication Error**: Make sure you're using an app password, not your regular password
- **Connection Error**: Check your internet connection and email provider settings
- **Not Receiving Emails**: Check spam folder and verify the NOTIFICATION_EMAIL address
