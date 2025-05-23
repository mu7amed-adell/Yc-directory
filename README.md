### **This project is built upon the JavaScript Mastery YC Directory project, with updated dependencies including TailwindCSS, Sanity, Shadcn, and Sentry.**

<a href="https://youtu.be/Zq5fmkH0T78?feature=shared" target="_blank">
  <img src="https://github.com/user-attachments/assets/471e2baa-8781-43b8-aaed-62e313d03e99" alt="Project Banner">
</a>

[](https://camo.githubusercontent.com/5c105d5dd1f24b577a84a011a4244667ea99caac40d8023eedf8380de2fdbdda/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d547970657363726970742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d726561637426636f6c6f723d333137384336)

[](https://camo.githubusercontent.com/d5419d45bd40bcd99f97e53993e1b56e0542fdd4d444974c59b5b5178a451545/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4e6578745f4a532d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d6e657874646f746a7326636f6c6f723d303030303030)

[](https://camo.githubusercontent.com/7e4e467927a2d7c07aefb9662c46cfbe44d4b2dc70cb8c5765895baae61bc3a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d53616e6974792d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d73616e69747926636f6c6f723d463033453246)

[](https://camo.githubusercontent.com/93bafe03a143d759a2983be7cd132f70a6a186233ca455f08f3f198adb3d2381/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d5461696c77696e645f4353532d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d7461696c77696e6463737326636f6c6f723d303642364434)

**Startup Directory Platform**

Build this project step by step with our detailed tutorial on [**JavaScript Mastery**](https://www.youtube.com/@javascriptmastery/videos) YouTube. Join the JSM family!

**📋 Table of Contents**

1. 🤖 Overview
2. 🔋 [Features](https://github.com/mu7amed-adell/Yc-directory/blob/main/README.md#features)
3. 🤸 [Quick Start](https://github.com/mu7amed-adell/Yc-directory/blob/main/README.md#quick-start)
4. 🔗 [Assets](https://github.com/mu7amed-adell/Yc-directory/blob/main/README.md#links)
5. 🕸️ [Snippets (Code to Copy)](https://github.com/mu7amed-adell/Yc-directory/blob/main/README.md#snippets)
6. 🔥 Changes done to the main repo
7. 🚀 JavaScript Mastery original repo

---

## 🤖 Overview of the project tool stack

### **React 19**

- Leveraged the latest React 19 features including modern hooks and concurrent rendering.
- Applied best practices for component architecture and state management.

### **Next.js 15**

- Built a production-ready, full-stack application using the latest Next.js App Router.
- Implemented **server actions**, **dynamic routing**, and **edge rendering** to create a fast, SEO-optimized experience.
- Structured code using layouts, loading states, and server components.

### **Tailwind CSS**

- Created a clean, responsive UI using utility-first CSS with Tailwind.
- Customized themes and animations with `tailwindcss-animate` and `tailwind-merge`.

### **ShadCN/UI**

- Built accessible and elegant UI components using ShadCN’s modern design system.
- Combined composable primitives and utility classes for maximum reusability.

### **Sanity.io (v3)**

- Structured and managed content dynamically through Sanity Studio.
- Learned schema definitions, GROQ queries, and Sanity’s real-time Content API.
- Created a CMS-backed editor experience to power the platform's content (like "Editor Picks").

### **NextAuth (Next-Auth v5 Beta)**

- Integrated GitHub authentication using NextAuth for secure login.
- Handled session management and protected routes.

### **TypeScript**

- Wrote type-safe code with interfaces and generics for API and component props.
- Used `sanity typegen` to autogenerate types from your content schema.

### **Other Tools & Libraries**

- `clsx`, `lucide-react`, and `react-md-editor` for interactive UX and Markdown support.
- Implemented view counters, search features, and client-server interactivity.

---

## **🔋 Features**

👉 **Live Content API**: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.

👉 **GitHub Authentication**: Allows users to log in easily using their GitHub account.

👉 **Pitch Submission**: Users can submit startup ideas, including title, description, category, and multimedia links ( image or video).

👉 **View Pitches**: Browse through submitted ideas with filtering options by category.

👉 **Pitch Details Page**: Click on any pitch to view its details, with multimedia and description displayed.

👉 **Profile Page**: Users can view the list of pitches they've submitted.

👉 **Editor Picks**: Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio.

👉 **Views Counter**: Tracks the number of views for each pitch instead of an upvote system.

👉 **Search**: Search functionality to load and view pitches efficiently.

👉 **Minimalistic Design**: Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic.

and many more, including the latest **React 19**, **Next.js 15** and **Sanity** features alongside code architecture and reusability

---

**🤸 Quick Start**

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```
git clone https://github.com/mu7amed-adell/Yc-directory.git
cd Yc-directory
```

**Installation**

Install the project dependencies using npm:

```
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'SANITY_TOKEN=

AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the [Sanity website](https://www.sanity.io/).

**Running the Project**

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/) in your browser to view the project.

---

## **🔗 Assets**

- Fonts and Assets used in the project can be found [here](https://drive.google.com/file/d/1OEFHnEq5pQFP86u8FOBLBBNxKPsbjjqU/view?usp=sharing)
- [Learn Server Actions](https://youtu.be/FKZAXFjxlJI?feature=shared)
- [Applicaton Workflow](https://miro.com/app/board/uXjVLT_tMdU=/?share_link_id=580854757703)

---

## 🕸️ Snippets

<details>
<summary><code>globals.css</code></summary>

```typescript
@import "tailwindcss";
@tailwind utilities;

/* Define your customizations directly in the CSS */
@theme {
  /* Custom colors */
  --primary: #EE2B69; /* Enables bg-primary */
  --primary-100: #FFE8F0;
  --secondary: #FBE843;
  --black-100: #333333;
  --black-200: #141413;
  --black-300: #7D8087;
  --black: #000000;
  --white-100: #F7F7F7;
  --white: #FFFFFF;

  /* Custom font */
  --font-work-sans: 'Work Sans', sans-serif; /* Enables font-work-sans */
  /* Custom radius */
  --radius: 0.5rem; /* Define the base radius */
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Custom box shadows */
  --shadow-100: 2px 2px 0px 0px rgb(0, 0, 0);
  --shadow-200: 2px 2px 0px 2px rgb(0, 0, 0);
  --shadow-300: 2px 2px 0px 2px rgb(238, 43, 105);

  /* Breakpoints */
  --screen-xs: 475px; /* Small screens */
}

.bg-primary{
  background-color: var(--primary);
}

@layer utilities{
  .heading{
    @apply uppercase bg-black px-6 py-3 text-center text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl my-5 ;
    font-family: var(--font-work-sans);
  }
  
}
@layer utilities {
  .flex-between {
    @apply flex justify-between items-center;
  }
  
}
.text-30-extrabold {
    @apply text-[30px] font-extrabold text-white;
  }
.text-30-bold {
    @apply text-[30px] font-bold text-black;
}
.text-30-semibold {
    @apply font-semibold text-[30px] text-black;
  }
.text-26-semibold {
   @apply font-semibold text-[26px] text-black;
}
.text-24-black {
    @apply text-[24px] font-black text-black;
  }
.text-20-medium {
    @apply font-medium text-[20px] text-black;
  }
.text-16-medium {
    @apply font-medium text-[16px] text-black;
  }
.text-14-normal {
    @apply font-normal text-sm text-white/80;
  }

.pink_container {
  @apply w-full flex justify-center items-center flex-col py-10 px-6 min-h-[530px];

  background-color: var(--primary);
  background-image: linear-gradient(
    to right,
    transparent 49.5%,
    rgba(251, 232, 67, 0.2) 49.5%,
    rgba(251, 232, 67, 0.6) 50.5%,
    transparent 50.5%
  );
  background-size: 4% 100%;
  background-position: center;
  background-repeat: repeat-x;
}

.tag {
    @apply px-6 py-3 font-bold uppercase relative;
    background-color: var(--secondary);
    font-family: var(--font-work-sans);
    border-radius: var(--radius-sm);
}
.heading {
    @apply uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5;
  }
.sub-heading {
    @apply font-medium text-[20px] text-white max-w-2xl text-center break-words;
}
.section_container {
    @apply px-6 py-10 max-w-7xl mx-auto;
}

.card_grid {
    @apply grid md:grid-cols-3 sm:grid-cols-2 gap-5;
}
.card_grid-sm {
    @apply grid sm:grid-cols-2 gap-5;
}
.no-result {
    @apply text-sm font-normal;
    font-family: var(--black-100);

}
 /* profile */
.profile_container {
    @apply w-full pb-10 pt-20 px-6 max-w-7xl mx-auto lg:flex-row flex-col flex gap-10;
  }

.profile_card {
    @apply w-100 px-6 pb-6 pt-20 flex flex-col justify-center items-center border-[5px] border-black rounded-[30px] relative z-0 h-fit max-lg:w-full;
    background-color: var(--primary);
    box-shadow: var(--shadow-100);
  }

@layer utilities {
.profile_title {
    @apply w-11/12 border-[5px] border-black rounded-[20px] px-5 py-3 absolute -top-9; /* Tailwind utilities */
    background-color: var(--white);  /* Custom background color */
    box-shadow: var(--shadow-100);   /* Custom box shadow */
    position: relative; /* Ensure the pseudo-elements are positioned relative to .profile_title */
  }

  /* Pseudo-element ::after */
.profile_title::after {
    content: '';  /* Required for pseudo-element */
    position: absolute;
    top: -1px;  /* Adjust position */
    right: 0;
    width: 100%;
    height: 60px;
    background-color: black;  /* Custom background color for the pseudo-element */
    transform: skewY(-6deg);  /* Skew the element */
    border-radius: 20px;  /* Match the border-radius */
    z-index: -1;  /* Ensure it appears behind the element */
  }

  /* Pseudo-element ::before */
.profile_title::before {
    content: '';  /* Required for pseudo-element */
    position: absolute;
    bottom: -1px;  /* Adjust position */
    left: 0;
    width: 100%;
    height: 60px;
    background-color: black;  /* Custom background color for the pseudo-element */
    transform: skewY(6deg);  /* Skew the element */
    border-radius: 20px;  /* Match the border-radius */
    z-index: -1;  /* Ensure it appears behind the element */
  }
}
.profile_image {
    @apply rounded-full object-cover border-[3px] border-black;
  }

 /* idea details */
.divider {
    @apply border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto;
  }

.view_skeleton {
  @apply bg-zinc-400 h-10 w-24 fixed bottom-3 left-3;
  border-radius: var(--radius-lg);
}

.view-container {
  @apply flex justify-end items-center mt-5 fixed bottom-3 left-3;
}
  /* navbar */
.avatar {
    @apply p-0 focus-visible:ring-0 bg-none rounded-full drop-shadow-md;
  }

.dropdown-menu {
    @apply w-56 border-[5px] border-black p-5 rounded-2xl;
    background-color: var(--white);
  }

.login {
    @apply border-[5px] py-4 border-black text-black relative font-work-sans font-medium hover:shadow-none transition-all duration-500;
    box-shadow: var(--shadow-100);
    background-color: var(--white);
  }
/* searchform */
.search-form {
    @apply max-w-3xl w-full min-h-[80px] border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5;
    background-color: var(--white);
  }

.search-input {
    @apply flex-1 font-bold placeholder:font-semibold w-full h-auto outline-none;
  }
.search-input::placeholder {
  color: var(--black-100);
}

.search-btn {
    @apply size-[50px] rounded-full flex justify-center items-center;
    background-color: var(--black);
  }

/* startupcard */
.startup-card {
    @apply border-[5px] border-black py-6 px-5 rounded-[22px] transition-all duration-500;
    box-shadow: var(--shadow-200);
    background-color: var(--white);
  }
.startup-card:hover {
  box-shadow:var(--shadow-300);
  background-color: var(--primary-100);
  border-color: var(--primary);
}

.startup-card_date {
    @apply font-medium text-[16px] px-4 py-2 rounded-full; /*group-hover:bg-white-100*/
    background-color: var(--primary-100);

  }

.startup-card_desc {
    @apply font-normal text-[16px] line-clamp-2 my-3 break-all;
    color: var(--black-100);
  }

.startup-card_img {
    @apply w-full h-[164px] rounded-[10px] object-cover;
  }

.startup-card_btn {
    @apply rounded-full font-medium text-[16px] px-5 py-3;
    background-color: var(--black-200);
    color: var(--white);
  }

.startup-card_skeleton {
    @apply w-full h-96 rounded-[22px] bg-zinc-400; /*zinc-400?*/
  }

  /* startupform */
.startup-form {
    @apply max-w-2xl mx-auto my-10 space-y-8 px-6;
    background-color: var(--white);

  }

.startup-form_label {
    @apply font-bold text-[18px] uppercase;
    color: var(--black);
  }

.startup-form_input {
    @apply border-[3px] border-black px-5 py-7 text-[18px] font-semibold rounded-full mt-3;
    color: var(--black);
  }
.startup-form_input::placeholder {
    color: var(--black-300);
}
.startup-form_textarea {
    @apply border-[3px] border-black p-5 text-[18px]  font-semibold rounded-[20px] mt-3;
    color: var(--black);
}
.startup-form_textarea::placeholder {
    color: var(--black-300);
}

.startup-form_error {
    @apply text-red-500 mt-2 ml-5;/* color red*/
  }

.startup-form_editor {
    @apply mt-3 border-[3px] border-black text-[18px] font-semibold;
    color:var(--black);
  }
.startup-form_editor::placeholder {
    color: var(--black-300);
}

.startup-form_btn {
    @apply border-[4px] border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px];
    background-color: var(--primary);
  }

.view-text {
    @apply font-medium text-[16px] px-4 py-2 capitalize;
    background-color: var(--primary-100);
    border-radius: var(--radius-lg);
  }

.category-tag {
    @apply font-medium text-[16px] px-4 py-2 rounded-full;
    background-color: var(--primary-100);
  }

.tag-tri {
    @apply before:content-[''] before:absolute before:top-2 before:left-2 before:border-t-[10px] before:border-t-black before:border-r-[10px] before:border-r-transparent after:content-[''] after:absolute after:bottom-2 after:right-2 after:border-b-[10px] after:border-b-black after:border-l-[10px] after:border-l-transparent;
  }

.w-md-editor-toolbar {
  padding: 10px;
}
```
</details>


<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
export default config;
```
</details>


## 🔥 Changes Done to the original repo

### 1. **Custom values move to CSS (`globals.css`) instead of `tailwind.config.ts`**

- **Before (in `tailwind.config.ts`)**:
    
    ```typescript
    theme: {
      extend: {
        colors: {
          primary: "#EE2B69"
        }
      }
    }
    ```
    
- **Now (in `globals.css`)**:
    
    ```typescript
    @layer base {
      :root {
        --primary: #EE2B69;
      }
    }
    ```
    
- Usage case
    
    ```typescript
    .bg-primary {
      background-color: var(--primary);
    }
    ```
    

| Feature | Why It’s Good |
| --- | --- |
| ✅ No need for `tailwind.config.ts` | Good for small projects or teams that want to avoid config complexity |
| ✅ All design tokens in one place | Uses native CSS variables in `globals.css` |
| ✅ Clear reusable utility classes | Promotes consistent design |
| ✅ Easy to override styles | Just update CSS variables |
| ✅ Supports full Tailwind power | Still leverages Tailwind utility generation and responsive design |

### **2. Sanity CLI and typegen problem with npm**

- **Problem**: `@sanity/codegen` breaks or shows errors because `react` and `react-dom` versions don't match or conflict.
- **Why**: Sanity and your Next.js app both use React. If the versions aren't exactly the same, it causes issues.
- **Fix**: In your `package.json`, make sure both are set to the same version:

```json
"dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
}
```

---

## 🚀 JavaScript Mastery original repo

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, [**JavaScript Mastery**](https://www.youtube.com/@javascriptmastery/videos). and you can check out the original repo by JavaScript Mastery at [Adrian Git](https://github.com/adrianhajdin/yc_directory/tree/main).
