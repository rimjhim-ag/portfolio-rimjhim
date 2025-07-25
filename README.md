
# 💼 Personal Portfolio Website

This is my **developer portfolio website** designed and built to showcase my projects, skills, and provide a direct way to get in touch with me.

Live Site: https://portfolio-rimjhim.vercel.app/

---

## 🛠 Tech Stack

- **Frontend**: React (with Vite)
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui
- **Icons**: Lucide-react
- **Email Handling**: Nodemailer (via API Route)
- **Deployment**: Vercel

---

## 📌 Features

- 📱 **Responsive Design** for all devices
- 🧠 **Smooth Scroll Navigation**
- 🧑‍💼 **About, Projects, Services, and Contact** sections
- 📧 **Contact Form** with email sending via Nodemailer
- 🌙 **Modern UI/UX** with animations and gradients
- 🔗 **Social Links** for GitHub, LinkedIn, Email

---

## 📁 Project Structure

```

project-root/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   │   └── Contact.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── api/
│   └── contact.js        # Nodemailer backend API route
├── .env                 # Environment variables (GMAIL\_USER, GMAIL\_PASS)
├── package.json
└── vite.config.js

````

---

## 🚀 Getting Started Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root and add:

   ```
   GMAIL_USER="your-email@gmail.com"
   GMAIL_PASS="your-app-password"
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Visit**
   Open [http://localhost:5173](http://localhost:5173)

---



------------------------------------------------------------



## ✉️ Email Integration Notes

- You must enable **2-Step Verification** on your Gmail account.
- Generate an **App Password** and use it for `GMAIL_PASS` in the `.env`.
- Make sure Vercel’s environment variables are also correctly set.

-------------------------------------

## 📦 Deployment

This project is deployed using [Vercel](https://vercel.com).  
After pushing to GitHub, Vercel automatically deploys your app if it’s linked.

------------------------------------------

## 📬 Contact

Feel free to check out my portfolio and get in touch directly via the contact form or:

- **Email**: arimjhim250@gmail.com  
- **GitHub**: [rimjhim-ag](https://github.com/rimjhim-ag)  
- **LinkedIn**: [Rimjhim Agrawal](https://www.linkedin.com/in/rimjhim-agrawal23000/)
```

