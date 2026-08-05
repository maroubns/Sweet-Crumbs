"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  eventDate: z.string().min(1, "Please choose an event date."),
  message: z
    .string()
    .min(10, "Tell us a little more — at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", eventDate: "", message: "" },
  });

  function onSubmit(values: ContactFormValues) {
    // In production this would send to an API route or email service.
    console.log("Contact form submitted:", values);
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl bg-white p-10 text-center shadow-md shadow-espresso-deep/5"
      >
        <CheckCircle2 className="size-12 text-sage-deep" aria-hidden="true" />
        <h3 className="mt-4 font-serif text-2xl font-semibold text-espresso-deep">
          Message sent!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thank you for reaching out. We typically reply within one to two
          business days with next steps.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 rounded-full border-espresso/30 text-espresso-deep hover:bg-blush/30"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 rounded-2xl bg-white p-8 shadow-md shadow-espresso-deep/5 sm:p-10"
        noValidate
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-espresso-deep">Full name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Jane Doe"
                  autoComplete="name"
                  className="rounded-xl border-border bg-cream focus-visible:ring-sage-deep"
                  {...field}
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
              <FormLabel className="text-espresso-deep">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="jane@email.com"
                  autoComplete="email"
                  className="rounded-xl border-border bg-cream focus-visible:ring-sage-deep"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="eventDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-espresso-deep">Event date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  className="rounded-xl border-border bg-cream focus-visible:ring-sage-deep"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-espresso-deep">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your event, guest count, and any design ideas you have in mind..."
                  rows={5}
                  className="rounded-xl border-border bg-cream focus-visible:ring-sage-deep"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="w-full rounded-full bg-espresso text-cream hover:bg-espresso-deep sm:w-auto"
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
