'use server';

/**
 * @fileOverview Generates a preliminary legal diagnostic report using AI based on financial data.
 *
 * - generatePreliminaryDiagnosis - A function that generates the preliminary diagnosis.
 * - GeneratePreliminaryDiagnosisInput - The input type for the generatePreliminaryDiagnosis function.
 * - GeneratePreliminaryDiagnosisOutput - The return type for the generatePreliminaryDiagnosis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePreliminaryDiagnosisInputSchema = z.object({
  financialData: z
    .string()
    .describe(
      'The financial data to analyze for generating the legal diagnostic report.'
    ),
});
export type GeneratePreliminaryDiagnosisInput = z.infer<
  typeof GeneratePreliminaryDiagnosisInputSchema
>;

const GeneratePreliminaryDiagnosisOutputSchema = z.object({
  report: z.string().describe('The generated preliminary legal diagnostic report.'),
});
export type GeneratePreliminaryDiagnosisOutput = z.infer<
  typeof GeneratePreliminaryDiagnosisOutputSchema
>;

export async function generatePreliminaryDiagnosis(
  input: GeneratePreliminaryDiagnosisInput
): Promise<GeneratePreliminaryDiagnosisOutput> {
  return generatePreliminaryDiagnosisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePreliminaryDiagnosisPrompt',
  input: {schema: GeneratePreliminaryDiagnosisInputSchema},
  output: {schema: GeneratePreliminaryDiagnosisOutputSchema},
  prompt: `You are an AI assistant specialized in generating preliminary legal diagnostic reports based on financial data.

  Analyze the following financial data and generate a concise and informative legal diagnostic report.

  Financial Data: {{{financialData}}}
  \n  Report:`,
});

const generatePreliminaryDiagnosisFlow = ai.defineFlow(
  {
    name: 'generatePreliminaryDiagnosisFlow',
    inputSchema: GeneratePreliminaryDiagnosisInputSchema,
    outputSchema: GeneratePreliminaryDiagnosisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
