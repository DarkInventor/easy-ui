"use client";
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-0 xl:min-h-[800px] px-6 ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="grid gap-2 text-center">
          <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/logo.svg" className="mx-auto size-8" alt="Logo" />
            <h1 className="text-2xl font-semibold">Create an account</h1>
            <p className="text-balance text-muted-foreground text-md">
              Enter your email below to create your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
             
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="h-9"
                required
              />
            </div>
            {/* <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div> */}
            <Button type="submit" className="h-9">
              Register with Email
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </div>
          <div className="mt-0 text-center text-sm">
            
            <Link href="/login" className="underline underline-offset-4">
            Don&apos;t have an account? Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-transparent lg:block ">
        {/* <Image
          src="/placeholder.svg"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>
    </div>
  )
}