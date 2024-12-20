"use client";
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-0 xl:min-h-[800px] px-6">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-2 text-center">
          <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/logo.svg" className="mx-auto size-8" alt="Logo" />
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-balance text-muted-foreground text-md">
            Login to your account
          </p>
     
          <div className="grid gap-4">
            <div className="grid gap-2 mt-4">
              
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="h-9"
                required
              />
            </div>
          
            <Button type="submit" className="h-9">
              Sign In with Email
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </div>
          <div className="mt-4 text-center text-sm">
            
            <Link href="/register" className="underline underline-offset-4">
            Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-transparent lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale hidden bg-transparent"
        />
      </div>
    </div>
  )
}
