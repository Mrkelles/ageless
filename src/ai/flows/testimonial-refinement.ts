'use server';
/**
 * @fileOverview An AI tool to refine customer testimonials, improving their readability, conciseness, and persuasive impact, while preserving the original sentiment.
 *
 * - refineTestimonial - A function that handles the testimonial refinement process.
 * - TestimonialRefinementInput - The input type for the refineTestimonial function.
 * - TestimonialRefinementOutput - The return type for the refineTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TestimonialRefinementInputSchema = z
  .object({
    rawTestimonial: z
      .string()
      .describe('The raw customer testimonial to be refined.'),
  })
  .describe('Input for the testimonial refinement flow, containing the raw testimonial text.');
export type TestimonialRefinementInput = z.infer<
  typeof TestimonialRefinementInputSchema
>;

const TestimonialRefinementOutputSchema = z
  .string()
  .describe('The refined customer testimonial, improved for readability and impact.');
export type TestimonialRefinementOutput = z.infer<
  typeof TestimonialRefinementOutputSchema
>;

export async function refineTestimonial(
  input: TestimonialRefinementInput
): Promise<TestimonialRefinementOutput> {
  return testimonialRefinementFlow(input);
}

const refineTestimonialPrompt = ai.definePrompt({
  name: 'refineTestimonialPrompt',
  input: {schema: TestimonialRefinementInputSchema},
  output: {schema: TestimonialRefinementOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in refining customer testimonials for landing pages.
Your goal is to improve readability, conciseness, and persuasive impact, while *strictly preserving the original sentiment and meaning*. Do not invent new facts or sentiments. Focus on making the existing message more powerful and clear.

Raw Testimonial:
{{{rawTestimonial}}}`,
});

const testimonialRefinementFlow = ai.defineFlow(
  {
    name: 'testimonialRefinementFlow',
    inputSchema: TestimonialRefinementInputSchema,
    outputSchema: TestimonialRefinementOutputSchema,
  },
  async input => {
    const {output} = await refineTestimonialPrompt(input);
    return output!;
  }
);
