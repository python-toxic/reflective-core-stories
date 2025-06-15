
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

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Login attempt with:", values);
    // Here you would typically handle the authentication logic,
    // like sending the credentials to your backend.
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
          <h1 className="text-4xl font-serif text-brand-navy">Welcome Back</h1>
          <p className="mt-2 text-brand-navy/80">Enter your credentials to access your journal.</p>
        </div>

        <div className="p-8 backdrop-blur-sm bg-brand-beige/20 rounded-lg shadow-2xl shadow-black/5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              <Button
                type="submit"
                variant="ghost"
                className="w-full !mt-12 text-brand-navy border border-brand-navy/30 hover:bg-brand-navy hover:text-brand-beige transition-all duration-300"
              >
                Sign In
              </Button>
            </form>
          </Form>
        </div>

        <div className="flex items-center justify-between text-sm text-brand-navy/80 pt-4 border-t border-brand-navy/10">
          <p>New here?</p>
          <Link to="/signup" className="font-medium text-brand-crimson cta-underline">
            Create an account
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;

