'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generatePreliminaryDiagnosis } from '@/ai/flows/generate-preliminary-diagnosis';
import { AnimatedWrapper } from './animated-wrapper';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Loader } from 'lucide-react';

export function DiagnosticTool() {
  const [financialData, setFinancialData] = useState('');
  const [report, setReport] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateReport = async () => {
    setIsLoading(true);
    setError('');
    setReport('');
    try {
      const result = await generatePreliminaryDiagnosis({ financialData });
      setReport(result.report);
    } catch (e) {
      setError('Ocorreu um erro ao gerar o diagnóstico. Tente novamente.');
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <section id="diagnostic-tool" className="py-20 md:py-32">
      <AnimatedWrapper className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Diagnóstico Preliminar com IA
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Cole abaixo os dados financeiros para uma análise preliminar e veja
            o poder da nossa IA em ação.
          </p>
        </div>
        <Card className="mt-8 bg-card/50">
          <CardHeader>
            <CardTitle>Insira os dados financeiros</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={financialData}
              onChange={(e) => setFinancialData(e.target.value)}
              placeholder="Ex: CNPJ, valor do débito, tipo de imposto, etc..."
              rows={6}
              className="bg-background/50"
            />
            <Button
              onClick={handleGenerateReport}
              disabled={isLoading || !financialData}
              className="mt-4 w-full"
            >
              {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? 'Gerando...' : 'Gerar Diagnóstico'}
            </Button>
          </CardContent>
        </Card>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Erro</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {report && (
          <Card className="mt-8 bg-card/50">
            <CardHeader>
              <CardTitle>Resultado do Diagnóstico</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none">
                <p className="whitespace-pre-wrap">{report}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </AnimatedWrapper>
    </section>
  );
}
