/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import bgImage from './assets/pokescarlet.jpg';

// 1. COMPONENTE DAS REGRAS (CARDS)
const RuleRow = ({ section }) => {
  const controls = useAnimation();
  const carouselRef = useRef(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setDragLimit(-(scrollWidth - offsetWidth + 50));
    }
  }, []);

  const handleResetScroll = () => {
    controls.start({ x: 0, transition: { type: "spring", stiffness: 80, damping: 20 } });
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="mb-12 md:mb-28 w-full"
    >
      <h2 className="text-lg md:text-2xl font-black mb-6 md:mb-10 uppercase tracking-widest text-gray-400 flex items-center px-4 md:px-0">
        <span className={`w-6 md:w-14 h-1 mr-3 md:mr-4 ${section.color.replace('border-', 'bg-')}`}></span>
        {section.category}
      </h2>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y px-4 md:px-0">
        <motion.div
          ref={carouselRef}
          drag="x"
          animate={controls}
          dragConstraints={{ right: 0, left: dragLimit }}
          dragElastic={0.1}
          dragMomentum={true}
          className="flex gap-4 md:gap-8 flex-nowrap pb-8 md:pb-10"
        >
          {section.rules.map((rule) => (
            <motion.div
              key={rule.id}
              whileTap={{ scale: 0.98 }}
              className={`min-w-70 md:min-w-100 p-6 md:p-10 rounded-2xl md:rounded-[40px] bg-black/80 backdrop-blur-3xl border-t-8 shadow-2xl transition-all ${section.color}`}
            >
              <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-4 uppercase italic tracking-tight leading-tight">{rule.title}</h3>
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium">{rule.desc}</p>
            </motion.div>
          ))}

          <motion.div
            onClick={handleResetScroll}
            whileHover={{ scale: 1.05 }}
            className="min-w-37.5 md:min-w-62.5 flex flex-col items-center justify-center rounded-2xl md:rounded-[40px] border-2 border-dashed border-white/20 cursor-pointer text-white/40 hover:text-wiki-cyan hover:border-wiki-cyan transition-all bg-white/5"
          >
            <span className="text-4xl md:text-6xl mb-2">↺</span>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Voltar ao Início</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// 2. COMPONENTE DA TABELA DE TIPAGEM
const TypeTable = () => {
  const types = [
    { name: 'Aço', atk: 'Fada, Gelo, Pedra', def: 'Fogo, Lutador, Terra' },
    { name: 'Água', atk: 'Fogo, Pedra, Terra', def: 'Elétrico, Planta' },
    { name: 'Dragão', atk: 'Dragão', def: 'Dragão, Fada, Gelo' },
    { name: 'Elétrico', atk: 'Água, Voador', def: 'Terra' },
    { name: 'Fada', atk: 'Dragão, Lutador, Sombrio', def: 'Aço, Venenoso' },
    { name: 'Fantasma', atk: 'Fantasma, Psíquico', def: 'Fantasma, Sombrio' },
    { name: 'Fogo', atk: 'Aço, Gelo, Inseto, Planta', def: 'Água, Pedra, Terra' },
    { name: 'Gelo', atk: 'Dragão, Planta, Terra, Voador', def: 'Aço, Fogo, Lutador, Pedra' },
    { name: 'Inseto', atk: 'Planta, Psíquico, Sombrio', def: 'Fogo, Pedra, Voador' },
    { name: 'Lutador', atk: 'Aço, Gelo, Normal, Pedra, Sombrio', def: 'Fada, Psíquico, Voador' },
    { name: 'Normal', atk: '(Nenhuma)', def: 'Lutador' },
    { name: 'Pedra', atk: 'Fogo, Gelo, Inseto, Voador', def: 'Água, Lutador, Planta, Terra, Aço' },
    { name: 'Planta', atk: 'Água, Pedra, Terra', def: 'Fogo, Gelo, Inseto, Venenoso, Voador' },
    { name: 'Psíquico', atk: 'Lutador, Venenoso', def: 'Fantasma, Inseto, Sombrio' },
    { name: 'Sombrio', atk: 'Fantasma, Psíquico', def: 'Fada, Inseto, Lutador' },
    { name: 'Terra', atk: 'Aço, Elétrico, Fogo, Pedra, Venenoso', def: 'Água, Gelo, Planta' },
    { name: 'Venenoso', atk: 'Fada, Planta', def: 'Psíquico, Terra' },
    { name: 'Voador', atk: 'Inseto, Lutador, Planta', def: 'Elétrico, Gelo, Pedra' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mt-20 md:mt-40 p-4 md:p-12 bg-black/60 backdrop-blur-md rounded-[40px] border border-white/10 shadow-2xl overflow-hidden"
    >
      <h2 className="text-2xl md:text-5xl font-black mb-2 uppercase italic text-center tracking-tighter">
        Tabela de <span className="text-wiki-red">Tipagem</span> Pokémon
      </h2>

      {/* SUBTÍTULO MOBILE */}
      <p className="text-center text-[10px] md:hidden font-bold uppercase tracking-[0.2em] text-wiki-cyan mb-10">
        ( Arraste lateralmente para ver as fraquezas )
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-175]">
          <thead>
            <tr className="bg-white/5 text-wiki-cyan uppercase text-xs md:text-sm tracking-widest border-b border-white/20">
              <th className="p-4 md:p-8 font-black underline decoration-wiki-red underline-offset-8">Tipo</th>
              <th className="p-4 md:p-8 font-black text-wiki-red">Vantagem Ofensiva (x2)</th>
              <th className="p-4 md:p-8 font-black text-wiki-blue">Fraqueza Defensiva (x2)</th>
            </tr>
          </thead>
          <tbody>
            {types.map((t, index) => (
              <tr
                key={index}
                className="border-b border-white/5 hover:bg-white/5 transition-colors odd:bg-white/2"
              >
                <td className="p-4 md:p-6 font-bold text-white uppercase italic tracking-tighter text-sm md:text-base">{t.name}</td>
                <td className="p-4 md:p-6 text-gray-400 text-sm md:text-base font-medium">{t.atk}</td>
                <td className="p-4 md:p-6 text-gray-400 text-sm md:text-base font-medium">{t.def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

function App() {
  const wikiData = [
    {
      category: "1. Setup & Turno",
      color: "border-wiki-red",
      rules: [
        { id: 'S1', title: 'Mulligan', desc: 'Sem Pokémon Básico? Mostre a mão, embaralhe e compre 7 novas. Oponente compra +1 carta por vez.' },
        { id: 'S2', title: 'Prêmios', desc: 'Coloque 6 cartas do topo viradas para baixo. Pegue-as ao nocautear Pokémon rivais.' },
        { id: 'T1', title: 'Evolução', desc: 'Não pode evoluir no turno que o Pokémon entrou em jogo ou no 1º turno da partida.' },
        { id: 'T2', title: 'Recuo', desc: 'Pague o custo de energia. Recuar cura Condições Especiais e remove efeitos de ataques.' }
      ]
    },
    {
      category: "2. Checagem de Pokémon",
      color: "border-wiki-blue",
      rules: [
        { id: 'C1', title: 'Ordem de Resolução', desc: '1º Veneno, 2º Queimado, 3º Adormecido e 4º Paralisado. Resolva habilidades aqui.' },
        { id: 'C2', title: 'Veneno & Queimadura', desc: 'Veneno: 1 marcador. Queimado: 2 marcadores + moeda (Cara cura, Coroa mantém).' },
        { id: 'C3', title: 'Sono & Paralisia', desc: 'Sono: Moeda (Cara acorda). Paralisia: Volta ao normal se passou um turno inteiro.' },
        { id: 'C4', title: 'Nocaute Final', desc: 'Se o dano de status zerar o HP na checagem, o Pokémon é nocauteado antes do turno iniciar.' }
      ]
    },
    {
      category: "3. Mecânicas Avançadas",
      color: "border-wiki-cyan",
      rules: [
        { id: 'A1', title: 'Dano vs Marcador', desc: '"Dano" aplica Fraqueza/Resistência. "Colocar Marcador" ignora essas regras.' },
        { id: 'A2', title: 'Cálculo de Dano', desc: '1º Base -> 2º Atacante -> 3º Fraqueza (x2) -> 4º Resistência (-30) -> 5º Defensor.' },
        { id: 'A3', title: 'Rule Box', desc: 'Pokémon-ex/V valem 2 prêmios. V-MAX ou V-ASTRO valem 3 prêmios ao serem nocauteados.' },
        { id: 'A4', title: 'V-ASTRO / GX', desc: 'Você só pode usar uma Habilidade V-ASTRO ou Ataque GX por PARTIDA inteira.' }
      ]
    },
    {
      category: "4. Regras de Juiz (Legalidade)",
      color: "border-wiki-red-alt",
      rules: [
        { id: 'J1', title: 'Falha de Busca', desc: 'Ao buscar no deck (conteúdo privado), você pode dizer que "não encontrou nada".' },
        { id: 'J2', title: 'Morte Simultânea', desc: 'Se ambos perdem o último Pokémon juntos, joga-se Morte Súbita (1 prêmio).' },
        { id: 'J3', title: 'Mão de 0 Cartas', desc: 'O jogo continua normal. Você só perde se não tiver deck para comprar no início do turno.' }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-wiki-dark text-white overflow-x-hidden font-sans">
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      <main className="relative z-10 p-0 md:p-12 max-w-7xl mx-auto py-10 md:py-20">

        {/* HEADER COM CONTORNO 12 PONTOS */}
        <header className="mb-12 md:mb-24 text-left px-6 md:px-0">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
              <span className="text-white">TCG</span>{' '}
              <span className="text-wiki-red" style={{
                textShadow: '-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -1px -2px 0 #fff, 1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff, 2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff'
              }}>MASTER</span>
              <br />
              <span className="text-wiki-blue text-2xl md:text-5xl tracking-widest" style={{
                textShadow: '-1.5px -1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, 1.5px 1.5px 0 #fff, -0.75px -1.5px 0 #fff, 0.75px -1.5px 0 #fff, -0.75px 1.5px 0 #fff, 0.75px 1.5px 0 #fff, -1.5px -0.75px 0 #fff, 1.5px -0.75px 0 #fff, -1.5px 0.75px 0 #fff, 1.5px 0.75px 0 #fff'
              }}>
                PROTOCOL KANTO
              </span>
            </h1>
            <div className="h-1.5 md:h-3 w-24 md:w-56 bg-wiki-cyan mt-4 shadow-[0_0_15px_#097188]"></div>
          </motion.div>
        </header>

        {/* REGRAS EM CARDS */}
        {wikiData.map((section, idx) => (
          <RuleRow key={idx} section={section} />
        ))}

        {/* TABELA DE TIPAGEM */}
        <TypeTable />

        <footer className="mt-20 border-t border-white/10 pt-10 text-center text-gray-400 text-[10px] md:text-sm pb-10">
          <p>© 2026 PROTOCOL KANTO - GUIA DE TCG</p>
          <p className="mt-2 text-wiki-cyan italic">Desenvolvido por AkyParfait</p>
        </footer>
      </main>
    </div>
  );
}

export default App;