# Contributing to EasyUI

Thank you for your interest in contributing to EasyUI! We appreciate your support and look forward to your contributions. This guide will help you understand the directory structure and provide detailed instructions on how to add a new component to EasyUI.

**You only need to add 1 file to add a new template** and it only takes around 10 minutes of work!

Once done, open a pull request from your forked repo to the main repo [here](https://github.com/DarkInventor/easy-ui/compare).

## Getting Started

### Fork and Clone the Repository

1. **Fork this repository**  
   Click [here](https://github.com/DarkInventor/easy-ui/fork) to fork the repository.

2. **Clone your forked repository to your local machine**

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/easy-ui.git
   ```

3. **Navigate to the project directory**

   ```bash
   cd easy-ui
   ```

4. **Create a new branch for your changes**

   ```bash
   git checkout -b my-new-branch
   ```

5. **Install dependencies**

   ```bash
   pnpm i
   ```

6. **Create a `.env.local` file**

   ```bash
   touch .env.local && echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" > .env.local
   ```

7. **Run the project**
   ```bash
   pnpm dev
   ```

## Adding a New Template

### 1. To add your template docs to EasyUI, you will need to add <YOUR-TEMPLATE-NAME/page.tsx> inside ```typescript app/(docs)/```.


### 2. To add Your Template inside Templates section

You have to update `/app/templates/page.tsx`

This step require you to add a photo + video of your template. I use Screen Studio to record the video and Handbrake it to decrease the size of video and add it to Cloudflare R2 bucket. If you don't have Screenstudio and Handbreak access please mention it in the contribution. I will add the photo + video from my side.

```typescript
<MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
          onClick={() => window.location.href='/ez-<YOUR-TEMPLATE-NAME>'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sm:hidden">
            <img src="<SCREENSHOT-OF-YOUR-TEMPLATE>" alt="EasyWaitlist" className="w-full h-auto" />
          </div>
          <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
            <source src="<RECORDED-VIDEO-OF-THE-TEMPLATE>" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Easy NextUI</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Landing page built using NextUI</p>
        </MagicCard>
```

## Ask for Help

For any help or questions, please open a new GitHub issue.