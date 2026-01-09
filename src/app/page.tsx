"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Loader2, Check } from "lucide-react";

type Answer = {
  question: string;
  answer: string;
};

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [email, setEmail] = useState("");
  const [openAnswer, setOpenAnswer] = useState("");

  // Efeito para avançar automaticamente após o loading (etapa 16)
  useEffect(() => {
    if (currentStep === 16) {
      const timer = setTimeout(() => {
        setCurrentStep(17);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleAnswer = (question: string, answer: string) => {
    setAnswers([...answers, { question, answer }]);
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const progress = ((currentStep + 1) / 21) * 100;

  const steps = [
    // Etapa 0 - Tela de abertura
    {
      type: "intro",
      content: (
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Descubra a solução ideal para suas{" "}
            <span className="text-[#00d1b2]">dificuldades em emagrecer!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Em poucos minutos, você saberá como o Secaps Black Chá pode transformar sua vida!
          </p>
          <button
            onClick={() => setCurrentStep(1)}
            className="bg-[#00d1b2] hover:bg-[#00b89f] text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#00d1b2]/50"
          >
            Clique para começar
            <ChevronRight className="inline ml-2" />
          </button>
        </div>
      ),
    },
    // Etapa 1 - Idade
    {
      type: "question",
      question: "Qual é a sua idade?",
      options: ["18-24", "25-34", "35-44", "45+"],
    },
    // Etapa 2 - Objetivo
    {
      type: "question",
      question: "Qual é o seu maior objetivo com a sua saúde?",
      options: ["Emagrecer", "Aumentar a energia", "Melhorar a autoestima"],
    },
    // Etapa 3 - Tentativas anteriores
    {
      type: "question",
      question: "Você já tentou emagrecer antes?",
      options: ["Sim, com sucesso", "Sim, sem sucesso", "Não, nunca tentei"],
    },
    // Etapa 4 - Educação
    {
      type: "info",
      content: (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00d1b2]">
            O emagrecimento não precisa ser difícil!
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            O Secaps Black Chá combina ingredientes poderosos que agem na queima de gordura,
            controle de apetite e aumento de energia.
          </p>
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-[#00d1b2] hover:bg-[#00b89f] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Continuar
            <ChevronRight className="inline ml-2" />
          </button>
        </div>
      ),
    },
    // Etapa 5 - Impedimento
    {
      type: "question",
      question: "O que mais te impede de emagrecer?",
      options: ["Desejos por doces", "Falta de energia", "Dificuldade de seguir uma dieta"],
    },
    // Etapa 6 - Controle alimentar
    {
      type: "question",
      question: "Você tem dificuldade em controlar sua ingestão de alimentos?",
      options: ["Sim, frequentemente", "Às vezes", "Não, consigo controlar"],
    },
    // Etapa 7 - Estresse
    {
      type: "question",
      question: "Como você descreveria seu nível de estresse diário?",
      options: ["Baixo", "Médio", "Alto"],
    },
    // Etapa 8 - Cansaço
    {
      type: "question",
      question: "Você se sente frequentemente cansado(a)?",
      options: ["Sim, muito", "Às vezes", "Não"],
    },
    // Etapa 9 - Motivação
    {
      type: "question",
      question: "O que motiva você a emagrecer?",
      options: ["Saúde", "Autoestima", "Aparência"],
    },
    // Etapa 10 - Explicação científica
    {
      type: "info",
      content: (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00d1b2]">
            Ciência comprovada
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Os ingredientes do Secaps Black Chá, como Psyllium e Curcumina, foram estudados por
            suas propriedades de emagrecimento e melhoria da saúde intestinal. Vamos ajudar você a
            decidir se este é o produto certo para você!
          </p>
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-[#00d1b2] hover:bg-[#00b89f] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Continuar
            <ChevronRight className="inline ml-2" />
          </button>
        </div>
      ),
    },
    // Etapa 11 - Apoio
    {
      type: "question",
      question: "Você se sente apoiado(a) em sua jornada de emagrecimento?",
      options: ["Sim, muita ajuda", "Às vezes", "Não, me sinto sozinho"],
    },
    // Etapa 12 - Frustração (resposta aberta)
    {
      type: "open",
      question: "O que mais te frustra em relação ao seu peso?",
    },
    // Etapa 13 - Dados objetivos
    {
      type: "info",
      content: (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00d1b2]">
            Entendendo sua rotina
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Saber sua rotina e hábitos é essencial para personalizarmos suas recomendações. Vamos
            ver um pouco mais sobre isso.
          </p>
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-[#00d1b2] hover:bg-[#00b89f] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Continuar
            <ChevronRight className="inline ml-2" />
          </button>
        </div>
      ),
    },
    // Etapa 14 - Autoridade
    {
      type: "info",
      content: (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00d1b2]">
            Milhares de transformações
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Milhares de pessoas já transformaram suas vidas com Secaps Black Chá. Você também pode!
            Veja o que nossos consumidores estão dizendo!
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg border border-[#00d1b2]/30">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#00d1b2]">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">
                  "Produto incrível! Perdi 8kg em 2 meses e me sinto muito mais disposta!"
                </p>
                <p className="text-[#00d1b2] text-sm mt-2 font-semibold">- Cliente verificado</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-[#00d1b2] hover:bg-[#00b89f] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 mt-6"
          >
            Continuar
            <ChevronRight className="inline ml-2" />
          </button>
        </div>
      ),
    },
    // Etapa 15 - Captura de email
    {
      type: "email",
      question: "Para receber um diagnóstico personalizado e dicas valiosas, por favor, forneça seu e-mail!",
    },
    // Etapa 16 - Loading (avança automaticamente após 3 segundos)
    {
      type: "loading",
      content: (
        <div className="text-center space-y-6 animate-fade-in">
          <Loader2 className="w-16 h-16 text-[#00d1b2] animate-spin mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Analisando suas respostas...
          </h2>
          <p className="text-xl text-gray-300">Isso levará apenas alguns segundos!</p>
        </div>
      ),
    },
    // Etapa 17 - Resultados
    {
      type: "info",
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-[#00d1b2]/10 border-2 border-[#00d1b2] p-6 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00d1b2] mb-4">
              Seu diagnóstico personalizado
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Com base nas suas respostas, identificamos que você enfrenta dificuldades relacionadas
              ao controle de apetite e falta de energia. Aqui está como podemos ajudar!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Check className="w-8 h-8 text-[#00d1b2] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Controle de Apetite</h3>
              <p className="text-gray-300">Ingredientes que reduzem a fome e controlam a ansiedade</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Check className="w-8 h-8 text-[#00d1b2] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Mais Energia</h3>
              <p className="text-gray-300">Fórmula que aumenta disposição e acelera metabolismo</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-[#00d1b2] hover:bg-[#00b89f] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Continuar
            <ChevronRight className="inline ml-2" />
          </button>
        </div>
      ),
    },
    // Etapa 18 - Benefícios adicionais
    {
      type: "info",
      content: (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00d1b2]">
            Benefícios exclusivos
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Além do Secaps Black Chá, você terá acesso a um catálogo exclusivo de dietas, shakes
            detox, e exercícios rápidos para complementar seu emagrecimento.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-lg font-bold text-white mb-2">Dietas Personalizadas</h3>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🥤</div>
              <h3 className="text-lg font-bold text-white mb-2">Shakes Detox</h3>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="text-lg font-bold text-white mb-2">Exercícios Rápidos</h3>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-[#00d1b2] hover:bg-[#00b89f] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Continuar
            <ChevronRight className="inline ml-2" />
          </button>
        </div>
      ),
    },
    // Etapa 19 - Taxa de sucesso
    {
      type: "info",
      content: (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00d1b2]">
            85% de taxa de sucesso
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Nossos clientes têm uma taxa de sucesso de 85% e muitos relatam mudanças significativas
            na autoestima e bem-estar!
          </p>
          <div className="bg-gradient-to-r from-[#00d1b2]/20 to-[#ff3860]/20 p-8 rounded-lg border border-[#00d1b2]">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#00d1b2] mb-2">85%</div>
              <p className="text-xl text-white">dos clientes alcançam seus objetivos</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-[#00d1b2] hover:bg-[#00b89f] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Ver oferta especial
            <ChevronRight className="inline ml-2" />
          </button>
        </div>
      ),
    },
    // Etapa 20 - Oferta final
    {
      type: "info",
      content: (
        <div className="space-y-6 animate-fade-in text-center">
          <div className="bg-gradient-to-r from-[#ff3860] to-[#00d1b2] p-1 rounded-lg inline-block">
            <div className="bg-black px-6 py-2 rounded-lg">
              <span className="text-2xl font-bold text-white">🔥 OFERTA ESPECIAL 🔥</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Pronto para dar o primeiro passo na sua{" "}
            <span className="text-[#00d1b2]">transformação?</span>
          </h2>
          <div className="bg-gray-900 p-8 rounded-lg border-2 border-[#00d1b2]">
            <p className="text-3xl font-bold text-white mb-2">
              <span className="line-through text-gray-500">R$ 197,00</span>
            </p>
            <p className="text-5xl font-bold text-[#00d1b2] mb-4">R$ 157,60</p>
            <p className="text-xl text-[#ff3860] font-bold mb-4">20% DE DESCONTO</p>
            <p className="text-gray-300 mb-6">Oferta válida apenas para os próximos 15 minutos!</p>
          </div>
          <a
            href="#checkout"
            className="inline-block bg-[#00d1b2] hover:bg-[#00b89f] text-black font-bold text-xl px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#00d1b2]/50 animate-pulse"
          >
            Garanta o seu agora!
            <ChevronRight className="inline ml-2" />
          </a>
          <p className="text-sm text-gray-400 mt-4">
            ✓ Entrega rápida e segura<br />
            ✓ Garantia de 30 dias<br />
            ✓ Suporte especializado
          </p>
        </div>
      ),
    },
  ];

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      {currentStep > 0 && currentStep < steps.length - 1 && (
        <div className="fixed top-0 left-0 w-full h-2 bg-gray-900 z-50">
          <div
            className="h-full bg-gradient-to-r from-[#00d1b2] to-[#ff3860] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        {/* Back Button */}
        {currentStep > 0 && currentStep < steps.length - 1 && currentStep !== 16 && (
          <button
            onClick={handleBack}
            className="mb-8 text-gray-400 hover:text-[#00d1b2] transition-colors flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Voltar
          </button>
        )}

        {/* Content */}
        <div className="min-h-[60vh] flex items-center justify-center">
          {currentStepData.type === "question" && (
            <div className="w-full space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                {currentStepData.question}
              </h2>
              <div className="grid gap-4">
                {currentStepData.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentStepData.question!, option)}
                    className="bg-gray-900 hover:bg-gray-800 border-2 border-gray-800 hover:border-[#00d1b2] text-white font-semibold text-lg p-6 rounded-lg transition-all duration-300 hover:scale-105 text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStepData.type === "open" && (
            <div className="w-full space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                {currentStepData.question}
              </h2>
              <textarea
                value={openAnswer}
                onChange={(e) => setOpenAnswer(e.target.value)}
                className="w-full bg-gray-900 border-2 border-gray-800 focus:border-[#00d1b2] text-white p-6 rounded-lg min-h-[150px] outline-none transition-colors"
                placeholder="Digite sua resposta aqui..."
              />
              <button
                onClick={() => {
                  if (openAnswer.trim()) {
                    handleAnswer(currentStepData.question!, openAnswer);
                    setOpenAnswer("");
                  }
                }}
                disabled={!openAnswer.trim()}
                className="w-full bg-[#00d1b2] hover:bg-[#00b89f] disabled:bg-gray-700 disabled:cursor-not-allowed text-black font-bold px-6 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Continuar
                <ChevronRight className="inline ml-2" />
              </button>
            </div>
          )}

          {currentStepData.type === "email" && (
            <div className="w-full space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                {currentStepData.question}
              </h2>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900 border-2 border-gray-800 focus:border-[#00d1b2] text-white p-6 rounded-lg outline-none transition-colors text-lg"
                placeholder="seu@email.com"
              />
              <button
                onClick={() => {
                  if (email.includes("@")) {
                    handleAnswer("Email", email);
                    setEmail("");
                  }
                }}
                disabled={!email.includes("@")}
                className="w-full bg-[#00d1b2] hover:bg-[#00b89f] disabled:bg-gray-700 disabled:cursor-not-allowed text-black font-bold px-6 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Continuar
                <ChevronRight className="inline ml-2" />
              </button>
            </div>
          )}

          {currentStepData.type === "intro" && currentStepData.content}
          {currentStepData.type === "info" && currentStepData.content}
          {currentStepData.type === "loading" && currentStepData.content}
        </div>

        {/* Step Counter */}
        {currentStep > 0 && currentStep < steps.length - 1 && currentStep !== 16 && (
          <div className="text-center mt-12 text-gray-500">
            Etapa {currentStep} de {steps.length - 1}
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
