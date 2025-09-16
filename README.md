# BLACKOUT BEATWORKz - Professional Beat Website

A professional website for showcasing beats and sample packs. This is a work in progress and we appreciate public help, but please respect our intellectual property.

## 🎵 Features

- **Professional Design**: Modern, dark theme with green accents
- **Responsive Layout**: Works perfectly on desktop and mobile devices  
- **Green Navigation**: Professional header with green-themed navigation for "Beats", "Sample Packs", etc.
- **Admin System**: Secure owner/admin login functionality
- **Beat Showcase**: Professional display of beats with play controls
- **Sample Packs**: Organized sample pack collections
- **Contact Form**: Professional contact system
- **Centered Layout**: Everything properly centered and aligned

## 🔧 Technical Details

- Pure HTML5, CSS3, and JavaScript
- No framework dependencies
- Responsive CSS Grid and Flexbox layouts
- Professional animations and transitions
- Font Awesome icons
- Google Fonts (Orbitron & Roboto)

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in a web browser
3. Or serve with a local web server: `python3 -m http.server 8000`

## 🔑 SSH Key Setup Guide

If you need to set up SSH keys for Git operations (cloning, pushing, pulling), follow this comprehensive guide:

### What are SSH Keys?

SSH keys provide a secure way to authenticate with Git repositories without using passwords. They consist of a public key (shared with GitHub) and a private key (kept secret on your computer).

### Step 1: Check for Existing SSH Keys

First, check if you already have SSH keys:

```bash
# Check for existing SSH keys
ls -la ~/.ssh
```

Look for files named:
- `id_rsa` and `id_rsa.pub` (RSA keys)
- `id_ed25519` and `id_ed25519.pub` (Ed25519 keys - recommended)

### Step 2: Generate a New SSH Key

If you don't have SSH keys or want to create new ones:

#### For Ed25519 (Recommended - more secure and faster):

```bash
# Replace "your_email@example.com" with your GitHub email
ssh-keygen -t ed25519 -C "your_email@example.com"
```

#### For RSA (if Ed25519 is not supported):

```bash
# Replace "your_email@example.com" with your GitHub email
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

**During key generation:**
1. Press Enter to accept the default file location
2. Enter a secure passphrase (recommended) or press Enter for no passphrase
3. Confirm your passphrase

### Step 3: Add SSH Key to SSH Agent

Start the SSH agent and add your key:

#### On macOS/Linux:

```bash
# Start the SSH agent
eval "$(ssh-agent -s)"

# Add your SSH key (adjust filename if needed)
ssh-add ~/.ssh/id_ed25519
# or for RSA: ssh-add ~/.ssh/id_rsa
```

#### On Windows (using Git Bash):

```bash
# Start the SSH agent
eval $(ssh-agent -s)

# Add your SSH key
ssh-add ~/.ssh/id_ed25519
# or for RSA: ssh-add ~/.ssh/id_rsa
```

### Step 4: Copy Your Public Key

Copy your public key to add it to GitHub:

#### On macOS:

```bash
# Copy Ed25519 public key
pbcopy < ~/.ssh/id_ed25519.pub
# or for RSA: pbcopy < ~/.ssh/id_rsa.pub
```

#### On Linux:

```bash
# Display and copy Ed25519 public key
cat ~/.ssh/id_ed25519.pub
# or for RSA: cat ~/.ssh/id_rsa.pub
```

#### On Windows:

```bash
# Display and copy Ed25519 public key
cat ~/.ssh/id_ed25519.pub
# or for RSA: cat ~/.ssh/id_rsa.pub
```

### Step 5: Add SSH Key to GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click your profile picture → **Settings**
3. In the sidebar, click **SSH and GPG keys**
4. Click **New SSH key** or **Add SSH key**
5. Give your key a descriptive title (e.g., "My Laptop - 2024")
6. Paste your public key into the "Key" field
7. Click **Add SSH key**
8. Confirm with your GitHub password if prompted

### Step 6: Test Your SSH Connection

Test that everything is working:

```bash
ssh -T git@github.com
```

You should see a message like:
```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

### Step 7: Clone Repository with SSH

Now you can clone repositories using SSH:

```bash
# Clone this repository using SSH
git clone git@github.com:Nickog47/WIP-BEATSITE-BLACKOUT-BEATWORKz.git

# Or if you already cloned with HTTPS, switch to SSH:
git remote set-url origin git@github.com:Nickog47/WIP-BEATSITE-BLACKOUT-BEATWORKz.git
```

### Troubleshooting

**Permission denied (publickey):**
- Make sure your SSH key is added to the SSH agent: `ssh-add -l`
- Verify your public key is added to GitHub
- Check the key format and ensure no extra characters

**SSH key not found:**
- Verify the file path: `ls -la ~/.ssh/`
- Make sure you're using the correct key filename

**Agent not running:**
- Start the SSH agent: `eval "$(ssh-agent -s)"`
- Add your key: `ssh-add ~/.ssh/id_ed25519`

### Security Best Practices

1. **Use a passphrase** for your private key
2. **Keep your private key secure** - never share it
3. **Use Ed25519** keys when possible (more secure)
4. **Regularly rotate** your SSH keys
5. **Remove old keys** from GitHub when no longer needed

## 🔐 Admin Access

For debugging and site management, use the admin login with owner credentials:

**Username**: `blackout_owner_2024`  
**Password**: `BEATWORKz_ADMIN_#47!secure`

*Note: These credentials are for the owner only. Unauthorized access is prohibited.*

## 🎨 Design Features

- **Header**: Professional branding with BLACKOUT BEATWORKz logo
- **Navigation**: Green-themed navigation menu (Beats, Sample Packs, About, Contact, Help)
- **Hero Section**: Eye-catching hero with animated sound waves
- **Beat Cards**: Professional beat showcase with play buttons and pricing
- **Sample Pack Grid**: Organized sample pack display
- **Contact Section**: Professional contact form and information
- **Footer**: Clean footer with social links and copyright

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🛠️ Work in Progress

This website is actively being developed. We welcome help and contributions, but please:
- **DO NOT** steal or misuse our work
- Respect our intellectual property
- Contact us before making significant changes
- Credit BLACKOUT BEATWORKz appropriately

## 📞 Contact

For collaborations, licensing, or support:
- Email: contact@blackoutbeatworkz.com
- Phone: +1 (555) 123-BEAT

---

© 2024 BLACKOUT BEATWORKz. All rights reserved. Work in progress - help appreciated, but do not steal our work.
© 2024 BLACKOUT BEATWORKz. All rights reserved. Work in progress - help appreciated, but do not steal our work.
