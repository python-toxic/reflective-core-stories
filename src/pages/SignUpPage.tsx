import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});

const SignUpPage = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError('');
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/signup', {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      // Optionally, auto-login after signup
      // localStorage.setItem('token', res.data.token);
      window.location.href = '/login';
    } catch (err) {
      setError(err?.response?.data?.message || 'Signup failed.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex items-center justify-center min-h-screen bg-brand-beige overflow-hidden font-sans">
      {/* Artistic background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-brand-navy/5 rounded-full animate-ink-flow opacity-50" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[50vw] h-[50vw] bg-brand-crimson/5 rounded-full animate-ink-flow [animation-delay:-5s] opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-md p-8 space-y-8 animate-fade-in-up">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-brand-navy">Create an Account</h1>
          <p className="mt-2 text-brand-navy/80">Begin your journey with Reflective Core.</p>
        </div>

        <div className="p-8 backdrop-blur-sm bg-brand-beige/20 rounded-lg shadow-2xl shadow-black/5">
          {error && <div className="mb-4 text-red-600 text-center font-medium">{error}</div>}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-brand-navy/80">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="bg-transparent border-0 border-b border-brand-navy/20 rounded-none focus:ring-0 focus:border-brand-crimson placeholder:text-brand-navy/40"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-brand-navy/80">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        {...field}
                        className="bg-transparent border-0 border-b border-brand-navy/20 rounded-none focus:ring-0 focus:border-brand-crimson placeholder:text-brand-navy/40"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-brand-navy/80">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        className="bg-transparent border-0 border-b border-brand-navy/20 rounded-none focus:ring-0 focus:border-brand-crimson placeholder:text-brand-navy/40"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-brand-navy/80">Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        className="bg-transparent border-0 border-b border-brand-navy/20 rounded-none focus:ring-0 focus:border-brand-crimson placeholder:text-brand-navy/40"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="ghost"
                className="w-full !mt-10 text-brand-navy border border-brand-navy/30 hover:bg-brand-navy hover:text-brand-beige transition-all duration-300"
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </form>
          </Form>
        </div>

        <div className="flex items-center justify-between text-sm text-brand-navy/80 pt-4 border-t border-brand-navy/10">
          <p>Already have an account?</p>
          <Link to="/login" className="font-medium text-brand-crimson cta-underline">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
