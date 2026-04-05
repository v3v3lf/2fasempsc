export type DocumentCategory = 'Crime' | 'Cível' | 'Teoria - Crime' | 'Teoria - Cível';

export interface LegalDocument {
  id: string;
  title: string;
  content: string;
  category: DocumentCategory;
}

export const documents: LegalDocument[] = [
  // ---------------------------------------------------------
  // SEÇÃO: CRIME (13 Documentos)
  // ---------------------------------------------------------
  {
    id: "crime-1",
    category: "Crime",
    title: "1. Modelo - Acordo de Não Persecução Penal (ANPP)",
    content: `TERMO DE ACORDO DE NÃO PERSECUÇÃO PENAL Autos n.º....

O MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA, pelo Promotor de Justiça em exercício nesta Promotoria, nos termos do art. 129, I, da Constituição Federal (CF), com fundamento no art. 28-A do Código de Processo Penal (CPP) e na Resolução______________________, e NOME (qualificação), ora denominado IMPUTADO, acompanhado por seu Advogado, firmam o presente ACORDO DE NÃO PERSECUÇÃO PENAL (ANPP), nos seguintes termos.

I – DO OBJETO: o presente acordo tem por objeto a conduta tipificada no artigo... [TIPIFICAÇÃO PENAL], em decorrência do... [NARRAR O FATO E SUAS CIRCUNSTÂNCIAS]

II – DA CONFISSÃO: conforme termo anexo (mídia audiovisual juntada), o Imputado assinou confissão detalhada e formal dos fatos narrados.

III – DAS OBRIGAÇÕES: O Imputado se compromete ao cumprimento das seguintes obrigações: a) Conforme incisos do art. 28-A caput.

IV – DA ACEITAÇÃO: o Imputado, assistido pelo Advogado, declara a aceitação ao presente acordo de livre e espontânea vontade (art. 28-A, §3.º, do CPP), e estar ciente de que a prestação de qualquer informação falsa poderá ser considerado descumprimento do presente acordo.

V – DA HOMOLOGAÇÃO: o presente acordo tem sua eficácia condicionada à prévia homologação judicial (art. 28-A, §§ 4.º e 6.º, do CPP).

VI – DA NÃO HOMOLOGAÇÃO: em caso de não homologação deste acordo pelo Juiz (art. 28-A, §§ 5.º, 7.º e 8.º, do CPP), esgotada a via recursal, o Ministério Público (MP) compromete-se a desentranhar a confissão, bem como de qualquer outra fonte de prova, que não serão usadas como prova no processo que venha a ser instaurado.

VII – DO DESCUMPRIMENTO: em caso de descumprimento das obrigações previstas nesse acordo: a) o MP requererá ao juiz a decretação de sua rescisão e posterior oferecimento da denúncia (art. 28-A, §10, do CPP); b) poderá ser utilizado como justificativa para o eventual não oferecimento de suspensão condicional do processo (art. 28-A, § 11, do CPP); c) a eventual revogação permitirá que a confissão e demais elementos de prova possam ser usados no processo que venha a ser instaurado.

VIII – DO CUMPRIMENTO: o Imputado se compromete a comunicar o cumprimento das obrigações, independente de notificação, devendo, quando for o caso, por iniciativa própria, apresentar imediatamente eventual justificativa para o não cumprimento.

E, por estarem justas e acordadas, as partes assinam o presente termo de ANPP que será submetido à homologação judicial.

Local, data. Promotor de Justiça Imputado Advogado

Autos n.º.... MM. Juiz,

Oferecido termo de ANPP em separado, acompanhado de termo contendo a confissão detalhada e circunstanciada dos fatos;

Requer-se a designação de audiência (art. 28-A, §4.º, do CPP), para fins de homologação e, em seguida, a devolução dos autos ao MP para as providências relacionadas à sua execução.

Local, data. Promotor de Justiça`
  },

  {
    id: "crime-2",
    category: "Crime",
    title: "2. Estrutura/Modelo - Denúncia (Crime Comum)",
    content: `AO JUÍZO DA... VARA CRIMINAL / DO TRIBUNAL DO JÚRI DA COMARCA DE.../UF Autos de Inquérito Policial n.º...

Atenção! Para fins de rigor técnico — embora essa distinção ainda não seja comumente exigida em espelhos de correção —, recomenda-se a seguinte sequência procedimental: a) O candidato deve, primeiramente, oferecer a denúncia perante o juiz das garantias e, em seguida, elaborar cota ministerial com pedido de encaminhamento dos autos ao juiz competente para a instrução e julgamento; ou (por estilo) b) A cota ministerial é apresentada primeiro, endereçada ao juiz das garantias, requerendo a remessa dos autos ao juiz da instrução e julgamento. A denúncia, neste caso, já é direcionada ao juízo comum.

O MINISTÉRIO PÚBLICO DO ESTADO DE…, pelo Promotor de Justiça em exercício nesta Promotoria, nos termos do art. 129, I, da Constituição Federal (CF), art. 25, III, da Lei n.º 8.625/1993, art... da Lei Complementar Estadual n.º XXXX/XXXX [Lei Orgânica do MPXX]; art. 100 do Código Penal (CP); e arts. 24 e 41, do Código de Processo Penal (CPP), vem, à presença de Vossa Excelência, oferecer DENÚNCIA, em face de NOME (qualificação), pelas condutas delituosas a seguir.

ENQUADRAMENTO TÍPICO - DIVIDIR POR FATOS CONSTA: DIA, HORÁRIO, RUA + DENUNCIADO + DOLO + ELEMENTAR + VÍTIMA + MODUS OPERANDI + LAUDO + QUALIFICADORAS/CA/AG


NARRATIVA FÁTICA 1 - DOS FATOS DO FATO 01 – CRIME Consta dos inclusos autos de inquérito policial que, no dia 02 de fevereiro de 2023, às 19 horas, na Rua..., o Denunciado CICLANO, agindo de forma livre, consciente e com "animus necandi", matou FULANO, ao desferir contra a vítima disparos de arma de fogo que causaram-lhe as lesões acostadas no laudo cadavérico de fls… que foram suficientes para sua morte, agindo por motivo torpe e valendo-se de recurso que impossibilitou a defesa da vítima.


DO FATO 2 - CRIME Nas mesmas condições de tempo e local descritas no "Fato 1", o Denunciado…

DO FATO 3 - CRIME Consta ainda que, no dia, horário, rua, o Denunciado… (...)

2 - DA NARRATIVA FÁTICA Conforme apurado… O crime foi praticado por motivo torpe…

3 - DA CONCLUSÃO Ante o exposto, o Ministério Público DENUNCIA: 3.1 NOME, todas as infrações penais na forma do art. 69 do Código Penal, como incurso no: a) (FATO 1) art. 121, §2.º, II (motivo fútil), duas vezes, na forma do art. 70, "caput", parte final (concurso formal impróprio), c/c artigo 29, "caput", todos do Código Penal.

CAPITULAÇÃO: NÚCLEO DO TIPO, QUALIFICADORAS, CAUSAS DE AUMENTO, AGRAVANTES OBJETIVAS, PARTICIPAÇÃO, CONCURSO DE CRIMES, TENTATIVA, OMISSÃO IMPRÓPRIA, VIOLÊNCIA DOMÉSTICA.

CONCURSO DE PESSOAS: c/c artigo 29, "caput", do CP (coautoria ou participação dolosamente distinta) CONCURSO DE CRIMES: ⮲ na forma do art. 69 do CP (concurso material) ⮲ na forma do art. 70, "caput", parte final, do CP (concurso formal impróprio) ⮲ na forma do art. 71, "caput", do CP (por sete vezes, em continuidade delitiva)

TENTATIVA: combinado com art. 14, II, do CP. OMISSÃO IMPRÓPRIA: na forma do art. 13, §2.º, alínea "a, b, c", todos do CP. VIOLÊNCIA DOMÉSTICA: no contexto de violência doméstica (Lei n.º 11.340/2006 / Lei n.º 14.344/2022).

Ademais, requer-se a observância do rito processual definido no art..., [com a notificação do Denunciado para oferecer defesa prévia], o recebimento da denúncia, a citação do Denunciado para apresentar resposta à acusação, e ao final, a condenação / pronúncia e posterior condenação pelo Tribunal do Júri, com a fixação de valor mínimo a título de ressarcimento do dano à vítima (art. 387, IV, do CPP).

RITOS: ORDINÁRIO: arts. 394, §1.º, I, e 400 e seguintes, do CPP SUMÁRIO: arts. 394, §1.º, II, e 531 e seguintes, do CPP SUMARÍSSIMO: arts. 394, §1.º, III, e 77 e seguintes da Lei n.º 9.099/1995 TRIBUNAL DO JÚRI: arts. 406 e seguintes do CPP PROPRIEDADE IMATERIAL: arts. 524 e seguintes do CPP CRIMES CONTRA A HONRA: arts. 519 e seguintes do CPP

DEFESA PRÉVIA: art. 514 do CPP LEI DE DROGAS: arts. 54 e seguintes da Lei n.º 11.343/2006

DEFESA PRÉVIA: art. 55 da Lei n.º 11.343/2006

Rol de testemunhas 1 - Nome (fls.) 2 - Nome (fls...)

Local/UF, data. Promotor de Justiça

EXEMPLOS DE NARRATIVA O homicídio foi praticado por motivo torpe, consistente em se vingar do sujeito passivo em razão do inconformismo com a ideia de que este teria se apropriado de seu quinhão no roubo anteriormente cometido. O delito, ainda, foi cometido com recurso que impossibilitou a defesa da vítima, pois esta foi colhida de modo súbito, sem ter qualquer condição de esboçar alguma reação. Ademais, o crime foi perpetrado com emprego de arma de fogo de uso restrito.

No dia 5 de maio de 2017, por volta das dezessete horas, na rua A, Lote 1, Boa Vista, o denunciado, de forma livre e consciente e com unidade de desígnios com o Claudenilson Pereira, vulgo Manezinho, já falecido, tentou subtrair, mediante grave ameaça e violência exercida com emprego de arma de fogo, celulares e dinheiro em espécie das vítimas Fernando Sousa, Leonardo Sousa e Bernardo Silva, efetuando três disparos de arma de fogo na vítima Leonardo, não consumando o resultado morte por circunstâncias alheias à sua vontade, pelo fato de nenhum dos tiros ter atingido região vital e pelo pronto atendimento médico prestado.

No dia 31 de dezembro de 2011, por volta das 21 horas, na Rodovia Presidente Dutra, na altura do Km 139, no município de Cruzeiro, quando consciente e voluntariamente conduzindo o veículo da marca NISSAN, modelo Frontier, placa SP LON 6866, no sentido São Paulo/Rio de Janeiro, faltou com o dever objetivo de cuidado, em altíssima velocidade, e sob influência de álcool, assumindo o risco de provocar um acidente e produzir o resultado morte de terceiros que estavam em veículos próximos e no seu próprio automóvel, pouco se importando que isso viesse a ocorrer, em local de intensa movimentação e curva perigosa, em razão da forma como dirigia o veículo expondo a perigo de dano toda a coletividade, por motivo fútil (apenas porque estava com pressa) ao entrar em uma curva perdeu o controle do automóvel que conduzia e invadiu a pista contrária vindo a colidir frontalmente com o automóvel marca RENAULT SENIC, que era conduzido por MARIA DAS DORES que trafegava sentido Rio de Janeiro/São Paulo.

DOLO Deve-se salientar o elemento subjetiva, "forma livre e consciente"

EXEMPLOS: Consta dos inclusos autos de inquérito policial que, [TEMPO], na Rua [LOCAL], o Denunciado FULANO e BELTRANO, agindo em conluio e previamente ajustados [CONCURSO DE PESSOAS], mataram JOÃO. Consta dos inclusos autos de inquérito policial que, [TEMPO], na Rua [LOCAL], o Denunciado BELTRANO [AGENTE], ciente do propósito de FULANO e, portanto, comungando do mesmo objetivo, lhe emprestou o instrumento pérfuro-cortante acima mencionado para matar a vítima. [PARTÍCIPE] Consta, ainda, que nas mesmas condições de tempo e lugar acima referidas, o Denunciado, enquanto efetuava disparos de arma de fogo em direção a FULANO, atingiu, por erro na execução, a criança ANTÔNIO, provocando-lhe os ferimentos descritos no laudo de fls..., os quais foram a causa de sua morte. Consta, outrossim, que o Denunciado, nas mesmas condições de lugar supra descritas, após praticar o homicídio, vilipendiou o cadáver de FULANO, ao morder e arrancar um pedaço da orelha direita do corpo sem vida do falecido.`
  },
  {
    id: "crime-3",
    category: "Crime",
    title: "3. Modelo - Denúncia (Rito Júri)",
    content: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DO JÚRI DA COMARCA DE SANTA HELENA/SP. Autos de IP nº:

O MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA, por seu Promotor de Justiça infra-assinado, com fulcro no artigo 129, inciso I, da Constituição Federal; artigos 24 e 41 do Código de Processo Penal; artigo 25, inciso III, da Lei 8.625/93 e artigo 103, inciso VI, da Lei Complementar Estadual 734/93, vem, respeitosamente, à presença de Vossa Excelência, oferecer DENÚNCIA contra JOÃO SILVA, qualificado em fls., pela prática do crime descrito nos termos que seguem:

Consta do incluso inquérito policial que, no dia 02 de março de 2022, por volta das 20h, na residência localizada na Rua das Palmeiras, nº 87, Bairro Vila Nova, na cidade de Santa Helena/SP, o denunciado JOÃO SILVA, agindo com animus necandi, por motivo fútil, com emprego de meio cruel e de recurso que dificultou a defesa da vítima, tentou matar FELIPE SILVA, seu primo, mediante múltiplos golpes com faca do tipo açougueiro, atingindo-o em diversas partes vitais do corpo, somente não consumando o homicídio por circunstâncias alheias à sua vontade, notadamente o socorro médico prestado.

Durante confraternização familiar em sua residência, após consumo de bebidas alcoólicas pelos presentes, o denunciado e a vítima iniciaram desentendimento, sendo a vítima quem passou a provocá-lo com ofensas verbais, como "Mário, vai tomar no c*!", e "Sua esposa não gosta de mim!". Apesar da intervenção das testemunhas JOSÉ SILVA e RAFAEL SILVA, que pediam para cessar a agressão, o denunciado as ameaçou dizendo: "Sai de perto, ou vai sobrar pra vocês também!". Na sequência, desferiu cerca de doze facadas contra a vítima, atingindo-lhe nas costas, abdômen, cabeça, braços e até mesmo o saco escrotal, provocando inclusive exposição de parte do intestino.

Após a brutal agressão, JOÃO SILVA evadiu-se do local com uma motocicleta pertencente a uma das testemunhas, após trancar o portão com fechadura eletrônica, impedindo o imediato socorro à vítima. O acesso só foi possível com a chegada da esposa do denunciado, que desconhecia os fatos e abriu o portão.

A vítima foi socorrida e conduzida à Santa Casa de Misericórdia de Santa Helena/SP, onde foi submetida a múltiplos procedimentos cirúrgicos: laparotomia exploradora com enterectomia segmentar, drenagem torácica bilateral, arteriorrafia e microneurorrafia ulnar, tenorrafias e suturas em diversas regiões do corpo. Desde então, encontra-se em coma induzido, em estado vegetativo.

Ressalte-se que o crime foi praticado por motivo fútil, pois decorreu de discussão banal iniciada por provocações verbais durante confraternização familiar, relacionada a desavenças envolvendo as esposas dos envolvidos, demonstrando absoluta desproporcionalidade entre a motivação e a conduta homicida.

Houve emprego de meio cruel, na medida em que o denunciado, após desferir golpe inicial no punho da vítima e inutilizar sua capacidade de defesa, prosseguiu com ao menos doze facadas em diversas regiões sensíveis do corpo — costas, abdômen, cabeça, braços e genitália —, inclusive expondo parte do intestino, o que evidencia intenção deliberada de provocar sofrimento físico extremo.

Utilizou ainda recurso que dificultou a defesa da vítima, surpreendendo-a no contexto de confraternização, sem qualquer aviso, enquanto esta estava desarmada, alcoolizada e em ambiente de confiança mútua entre familiares. Ademais, após a agressão, o denunciado trancou o imóvel com fechadura eletrônica, impedindo o socorro imediato por parte das testemunhas.

Por fim, o crime não se consumou por circunstâncias alheias à vontade do agente, haja vista que a vítima sobreviveu unicamente graças à chegada fortuita da esposa do denunciado, que abriu o portão e possibilitou o atendimento médico urgente, seguido de múltiplos procedimentos cirúrgicos que, embora tenham preservado a vida, mantêm a vítima em estado vegetativo grave.

Diante do exposto, o MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA oferece DENÚNCIA contra JOÃO SILVA pela prática do crime previsto no artigo 121, § 2º, incisos II (fútil), III (meio cruel) e IV (recurso que dificultou a defesa do ofendido), combinado com o artigo 14, inciso II, ambos do Código Penal

O Ministério Público requer, após o recebimento e autuação desta, seja instaurado o devido processo penal, observando-se o rito estabelecido nos artigos 406 e seguintes do Código de Processo Penal, citando-se o denunciado para oferecer resposta escrita à acusação, no prazo de dez dias, com posterior realização de audiência...

ROL: FELIPE SILVA – vítima
JOSÉ SILVA – testemunha
RAFAEL SILVA – testemunha

Local, data Promotor de Justiça Substituto`
  },
  {
    id: "crime-4",
    category: "Crime",
    title: "4. Modelo - Cota Ministerial",
    content: `COTA DE OFERECIMENTO DA DENÚNCIA Autos de Inquérito Policial n.º... MM. Juiz,

Oferecida denúncia em separado;

Requer-se remessa para o juízo competente (art.3-B, XIV c/c art. 3ª-C do CPP, com interpretação conforme pelo STF)

Requer-se a juntada de folha de antecedentes criminais e certidões;

Outros:

Deixa-se oferecer a proposta de transação penal (art. 76 da Lei n.º 9.099/1995), porquanto fundamento;

Deixa-se oferecer a proposta de suspensão condicional do processo (art. 89 da Lei n.º 9.099/1995), porquanto fundamento;

Deixa-se de oferecer a proposta de transação penal (art. 76 da Lei n.º 9.099/1995), e suspensão condicional do processo (art. 89 da Lei n.º 9.099/1995), porquanto não se aplicam na hipótese de delitos sujeitos ao rito da Lei Maria da Penha (entendimento sumulado do STJ). Súmula 536-STJ: A suspensão condicional do processo e a transação penal não se aplicam na hipótese de delitos sujeitos ao rito da Lei Maria da Penha.

Deixa-se de oferecer acordo de não persecução penal (art. 28-A do CPP), visto que fundamento; Art. 28-A. Não sendo caso de arquivamento e tendo o investigado confessado formal e circunstancialmente a prática de infração penal sem violência ou grave ameaça e com pena mínima inferior a 4 (quatro) anos, o Ministério Público poderá propor acordo de não persecução penal...

Requer-se, como efeito extrapenal específico da condenação, seja decretada a PERDA, COMO PRODUTO OU PROVEITO DO CRIME, DOS BENS correspondentes à diferença entre o valor do patrimônio do condenado e aquele que seja compatível com o seu rendimento lícito (art. 91-A do CP); Requer-se, como efeito extrapenal específico da condenação, seja decretada a PERDA DO CARGO PÚBLICO / FUNÇÃO PÚBLICA / MANDATO ELETIVO (art. 92, I, "a" / "b", do CP); Requer-se, como efeito extrapenal específico da condenação, seja decretada a incapacidade para o exercício do poder familiar...

...[fundamento cabimento]; além disso, presentes os pressupostos de admissibilidade (art. 312, "caput" do CPP), pois necessária a prisão como garantia da ordem pública / como garantia da ordem econômica / para conveniência da instrução criminal / para assegurar a aplicação da lei penal / descumprimento das obrigações impostas por força de outras medidas cautelares, uma vez que [FUNDAMENTO], havendo, ainda, prova da existência do crime e indício suficiente de autoria, bem como de perigo gerado pelo estado de liberdade do imputado. Ressalta-se, por fim, que tais fatos são novos (art. 312, §2.º, do CPP), sendo insuficientes outras medidas cautelares diversas da prisão (art. 282, §6.º, do CPP);

Requer-se seja decretada a medida assecuratória de SEQUESTRO DE BENS dos Denunciados NOMES (art. 125 e seguintes do CPP e art...) [fundamento]; Requer-se seja determinada a expedição de MANDADO DE BUSCA E APREENSÃO para a residência de FULANO (art. 240, §1.º, "b", do CPP), [fundamento];

OUTROS Requer-se seja a arma de fogo apreendida entregue ao Comando do Exército, para que lhe seja dado o destino previsto no art. 25 do Estatuto do Desarmamento; No tocante ao CRIME TAL ou AGENTE TAL, o Ministério Público promove o arquivamento do inquérito policial, em face da ausência de justa causa para propositura de ação penal, sem prejuízo da regra contida no art. 18 do CPP. Consta dos autos que NOME ameaçou de morte o denunciado LUCAS, no dia xxxx (art. 147 do CP). Apesar disso, a vítima não ofereceu representação, ...APARTADOS.

Em relação ao CRIME TAL e levando-se em conta TAL COISA, requer-se seja declarada a extinção de punibilidade (art. 107, inc..., do CP); Requer-se a tramitação prioritária por se tratar de crime hediondo (art. 394-A do CPP); Requer-se sejam juntados os laudos periciais faltantes; Requer-se seja juntado o laudo de exame químico-toxicológico e, tão logo juntado, seja determinada a incineração das drogas apreendidas (art. 50-A da LD)... Denunciados NOMES, sem prejuízo da remuneração, porquanto fundamento (art. 2º, §5º, Lei n.º 12.850/2013).

MARIA DA PENHA Requer-se a concessão das seguintes MEDIDAS PROTETIVAS em desfavor do Denunciado (art. 22 da Lei n.º 11.340/2006): [escolher algumas] Requer-se a apreensão da arma de fogo sob posse do Denunciado (art. 18, IV, da Lei n.º 11.340/2006);

LEI DE CRIME RACIAL Requer-se seja garantido à vítima, em todos os atos processuais, o acompanhamento por advogado ou defensor público (art. 20-D da Lei 7.716/89);

IMPO Requer-se remessa de cópia dos autos ao Juizado Especial Criminal para processar o crime de desobediência (art. 330 do CP) perpetrado, em tese, pelo denunciado HENRIQUE (ou requer-se a designação de audiência preliminar para o oferecimento de transação penal em favor de HENRIQUE);

Local, data. Promotor de Justiça`
  },
  {
    id: "crime-5",
    category: "Crime",
    title: "5. Estrutura/Modelo - Alegações Finais por Memoriais Escritos",
    content: `AO JUÍZO DA... VARA CRIMINAL / DO TRIBUNAL DO JÚRI DA COMARCA DE.../UF Autos n.º… AUTOR: Ministério Público do Estado de… RÉU: Nome

O MINISTÉRIO PÚBLICO DO ESTADO DE..., pelo Promotor de Justiça em exercício nesta Promotoria, nos termos do art. 129, I, da Constituição Federal (CF), art. 25, III, da Lei n.º 8.625/1993, art... da Lei Complementar Estadual n.º XXXX/XXXX; art. 403, §3.º (procedimento comum) / 411 (júri), do Código de Processo Penal (CPP), vem, à presença de Vossa Excelência, apresentar ALEGAÇÕES FINAIS POR MEMORIAL, em razão da ação penal promovida por este órgão contra NOME, pelos fatos e fundamentos a seguir.

1 – DO RELATÓRIO Trata-se de ação penal promovida pelo Ministério Público em face do Réu Nome porque no dia..., local..., fato…. Foi recebida a denúncia (fls.). Resposta à acusação (fls). Durante a instrução, foi ouvida a vítima, as testemunhas e, ao final, interrogado o réu (fls.). Os laudos e exames foram juntados (fls). Encerrada a instrução, os autos vieram para alegações finais. É o breve relatório. Passo à manifestação.

2 – DAS PRELIMINARES DE MÉRITO Inicialmente, cumpre destacar que o presente feito foi instaurado e se desenvolveu regular e validamente, não existindo qualquer nulidade a ser sanada, estando, assim, pronto para julgamento. Passa-se, portanto, à análise do mérito. Inicialmente, cumpre destacar que o presente feito foi instaurado e não se desenvolveu regular e validamente, existindo nulidade a ser sanada. Vejamos.

Arguir NULIDADES ABSOLUTAS E RELATIVAS EM PREJUÍZO DO MP

3 – DO MÉRITO 3.1 – DA MATERIALIDADE DELITIVA E DA AUTORIA PROCEDIMENTO COMUM A materialidade delitiva em relação ao delito de... restou devidamente comprovada em razão do... laudo... e exame...., aliado aos depoimentos colhidos na instrução criminal. Ademais, a autoria é certa e segura ante as provas carreadas nos autos. As testemunhas afirmaram que...; outrossim, o próprio Réu afirmou em seu interrogatório que... Dessa forma, as provas coligidas aos autos são cristalinas e aptas a comprovar a responsabilidade do Acusado pela prática do delito em tela devendo ser condenado.

Rebater teses defensivas (se existentes). Pondere-se, ainda, que a defesa objetiva a negativa de autoria. Ocorre que referido argumento não merece acolhida, porquanto as provas colhidas durante a instrução são suficientes em apontar que o réu praticou o delito. Assim, não merece acolhida...

4 – DA PENA NÃO COLOCAR NO MEMORIAL DO JÚRI A) 1.ª FASE: PENA-BASE Em relação à reprimenda a ser fixada, inicialmente no que tange à pena-base, como estão ausentes / presentes elementos sobre as circunstâncias judiciais previstas no art. 59 do CP, deve-se fixá-la no mínimo legal / acima do mínimo legal / próximo ao máximo legal.

B) 2.ª FASE: AGRAVANTES Em seguida, na segunda fase, diante da ausência / presença da agravante X, conforme certidão..., a pena deve ser mantida / aumentada.

C) 3.ª FASE: CAUSAS DE AUMENTO E DE DIMINUIÇÃO Na derradeira fase, não concorre / concorre a causa de aumento X, prevista no art..., visto que..., razão pela qual a pena deve ser mantida / aumentada. Diante da reincidência do Réu, deve ser afastada eventual aplicação do redutor do tráfico privilegiado.

D) CONCURSO DE CRIMES No caso em tela presente o concurso material / formal / continuidade delitiva (art... do CP), devendo ser cumulada a pena / exasperada na fração...

E) REGIME INICIAL DE CUMPRIMENTO DA PENA Em virtude de..., o Réu deve iniciar o cumprimento da pena privativa de liberdade em regime aberto / semiaberto / fechado (art. 33, §2º, a/b/c, do CP).

F) DA CONVERSÃO DA PENA Outrossim, incabível a substituição da pena privativa de liberdade por restritiva de direitos, porquanto... (art. 44 do CP).

G) DO SURSIS Ainda, incabível a concessão de suspensão condicional da pena, pois... (art. 78 e 79 do CP),

H) DA PRISÃO PREVENTIVA Por fim, deve ser decretada / mantida a PRISÃO PREVENTIVA do NOME porquanto cabível sua decretação (art. 313, inciso? / p. único, do CPP), já que [FUNDAMENTO CABIMENTO]; além disso, presentes os pressupostos de admissibilidade (art. 312, "caput" do CPP), pois necessária a prisão como garantia da ordem pública / como garantia da ordem econômica / para conveniência da instrução criminal / para assegurar a aplicação da lei penal / descumprimento das obrigações impostas por força de outras medidas cautelares, uma vez que [FUNDAMENTO], havendo, ainda, prova da existência do crime e indício suficiente de autoria, bem como de perigo gerado pelo estado de liberdade do imputado. Ressalta-se, por fim, que tais fatos são novos (art. 312, §2.º, do CPP), sendo insuficientes outras medidas cautelares diversas da prisão (art. 282, §6.º, do CPP).

5 – DOS PEDIDOS Ante o exposto, o Ministério Público requer a procedência da ação com a:

a CONDENAÇÃO de NOME pelo delito do art..., nos termos expostos.

a PRONÚNCIA de NOME pelo delito do art..., nos termos expostos, para que seja submetido a julgamento pelo Tribunal do Júri e, ao final, condenado. Bem como seja revogada a PRISÃO PREVENTIVA e, consequentemente, concedido o direito de recorrer em liberdade / bem como seja mantida ou concedida a prisão preventiva e, consequentemente, negado o direito de recorrer em liberdade.

É a manifestação ministerial. Local/UF, data. Promotor de Justiça Substituto`
  },
  {
    id: "crime-6",
    category: "Crime",
    title: "6. Estrutura - Alegações Finais por Memoriais (Rito do Júri – Fase da Pronúncia)",
    content: `AO JUÍZO DA... DO TRIBUNAL DO JÚRI DA COMARCA DE.../UF Autos n.º… AUTOR: Ministério Público do Estado de… RÉU: Nome

O MINISTÉRIO PÚBLICO DO ESTADO DE..., pelo Promotor de Justiça em exercício nesta Promotoria, nos termos do art. 129, I, da Constituição Federal (CF), art. 25, III, da Lei n.º 8.625/1993, art... da Lei Complementar Estadual n.º XXXX/XXXX; art. 403, §3.º (procedimento comum) / 411 (júri), do Código de Processo Penal (CPP), vem, à presença de Vossa Excelência, apresentar ALEGAÇÕES FINAIS POR MEMORIAL, em razão da ação penal promovida por este órgão contra NOME, pelos fatos e fundamentos a seguir.

1 – DO RELATÓRIO Trata-se de ação penal promovida pelo Ministério Público em face do Réu Nome porque no dia..., local..., fato…. Foi recebida a denúncia (fls.). Resposta à acusação (fls). Durante a instrução, foi ouvida a vítima, as testemunhas e, ao final, interrogado o réu (fls.). Os laudos e exames foram juntados (fls). Encerrada a instrução, os autos vieram para alegações finais. É o breve relatório. Passo à manifestação.

2 – DAS PRELIMINARES DE MÉRITO Inicialmente, cumpre destacar que o presente feito foi instaurado e se desenvolveu regular e validamente, não existindo qualquer nulidade a ser sanada, estando, assim, pronto para julgamento. Passa-se, portanto, à análise do mérito. ou Inicialmente, cumpre destacar que o presente feito foi instaurado e não se desenvolveu regular e validamente, existindo nulidade a ser sanada. Vejamos.

Arguir NULIDADES ABSOLUTAS E RELATIVAS EM PREJUÍZO DO MP

3 – DO MÉRITO 3.1 – DA MATERIALIDADE DELITIVA E DA AUTORIA JÚRI A materialidade delitiva restou devidamente comprovada... As provas produzidas em Juízo colocam o Réu no cenário do crime, indicando-o como o Autor... Ressalta-se que a pronúncia do Réu para o julgamento pelo Tribunal do Júri não exige a existência de prova cabal da autoria do delito, sendo suficiente, nessa fase processual, a mera existência de indícios da autoria, pois a pronúncia é juízo de mera admissibilidade, não exigindo certeza. Vale ressaltar que não obstante a aplicação de referida regra na fase de pronúncia não ser pacífico na doutrina e jurisprudência, esse entendimento é o majoritário e amplamente reconhecido, em especial pelo STJ. Dessa forma, as provas coligidas aos autos são cristalinas e aptas a comprovar a materialidade do delito e a existência de indícios suficientes de autoria, estando presentes os requisitos exigidos pelo art. 413 do CPP para que o Acusado seja pronunciado e submetido a julgamento pelo Egrégio Tribunal do Júri, sendo, ao final, condenado.

Rebater teses defensivas (se existentes). Pondere-se, ainda, que a defesa objetiva a negativa de autoria. Ocorre que referido argumento não merece acolhida, porquanto as provas colhidas durante a instrução são suficientes em apontar que o réu praticou o delito. Assim, não merece acolhida...

3.2 DAS QUALIFICADORAS E CIRCUNSTÂNCIAS JÚRI: Em relação às qualificadoras imputadas na denúncia de… e…, imperioso o acolhimento delas, porquanto somente é cabível a exclusão das qualificadoras, na decisão de pronúncia, quando manifestamente improcedentes e descabidas, porquanto o juízo acerca da sua caracterização ou não deve ficar a cargo do Conselho de Sentença. Ainda, está presente a causa de aumento…

3.3 DOS CRIMES CONEXOS Considerando a conexão direta do crime doloso contra a vida com os delitos previstos nos arts…, bem como nos delitos do art…, devem ser igualmente julgados pelo Tribunal do Júri, conforme dispõe o art. 78, I, do CPP.

4 – DOS PEDIDOS Ante o exposto, o Ministério Público requer a procedência da ação com a: a PRONÚNCIA de NOME pelo delito do art..., nos termos expostos, para que seja submetido a julgamento pelo Tribunal do Júri e, ao final, condenado.

É a manifestação ministerial. Local/UF, data. Promotor de Justiça Substituto`
  },
  {
    id: "crime-7",
    category: "Crime",
    title: "7. Modelo - Alegações Finais por Memoriais (Rito do Júri – Fase da Pronúncia)",
    content: `Processo nº Autor: MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA Réu: Rafael Menezes

ALEGAÇÕES FINAIS POR MEMORIAL MM. Juiz,

I – Relatório Rafael Menezes foi denunciado pela prática de homicídio qualificado pelo meio cruel, por ter desferido seis golpes de faca contra Márcio Alves Pinto, no dia 14 de fevereiro de 2023, por volta das 23h45, na Rua das Laranjeiras, nº 214, nesta comarca. Recebida a denúncia, o réu foi citado, apresentou defesa escrita, alegando nulidade absoluta por cerceamento do direito de defesa e legítima defesa. Negada a absolvição sumária, foi realizada a instrução, com oitiva de 3 testemunhas de acusação. O réu foi interrogado e encerrada a instrução. Sem diligências pendentes, os debates foram convertidos em memoriais. Eis o resumo. Do apresentado, evidente a prova da materialidade e indícios de autoria da prática delitiva, devendo o réu ser pronunciado.

II – Preliminar a) Nulidade absoluta Inicialmente, impõe-se o enfrentamento da preliminar arguida pela defesa, que sustenta nulidade absoluta por ausência de defensor nas oitivas de testemunhas durante o inquérito policial. Tal arguição não merece acolhida. A jurisprudência pacífica do Supremo Tribunal Federal e do Superior Tribunal de Justiça é no sentido de que o procedimento investigativo possui natureza inquisitiva, razão pela qual a ausência de defesa técnica não compromete a validade dos atos praticados nessa fase, especialmente quando, como no presente caso, todas as testemunhas foram regularmente ouvidas em juízo sob o crivo do contraditório e da ampla defesa. Ademais, não houve qualquer demonstração concreta de prejuízo, o que inviabiliza a decretação de nulidade, nos termos do artigo 563 do Código de Processo Penal.

b) Emendatio Libelli Embora a denúncia tenha imputado ao acusado a prática de homicídio qualificado exclusivamente pelo meio cruel (art. 121, §2º, III, do Código Penal), há presença da qualificadora do recurso que dificultou a defesa da vítima (art. 121, §2º, IV, do CP), tornando cabível a sua inclusão mediante emendatio libelli, nos termos do art. 383 do Código de Processo Penal. Ficou comprovado que o réu retornou ao local encapuzado, posicionou-se em ponto cego e aguardou a saída da vítima, a quem atacou repentinamente pelas costas, com múltiplos golpes de faca, sem que esta tivesse qualquer possibilidade de se defender. Tal dinâmica caracteriza o ataque de surpresa, amplamente reconhecido pela doutrina e pela jurisprudência como hipótese de incidência da mencionada qualificadora. A modificação proposta não altera o fato descrito na denúncia, mas apenas o enquadramento jurídico adequado ao que se comprovou em juízo, razão pela qual é plenamente viável a inclusão da qualificadora com base no art. 383 do CPP, assegurados o contraditório e a ampla defesa.

III -Mérito Superada a questão preliminar e a adequação jurídica da capitulação, passa-se à análise do mérito. A materialidade delitiva está amplamente comprovada pelo referido laudo necroscópico, que evidencia a intensidade e gravidade das lesões, bem como pelo boletim de ocorrência, laudo de local da cena do crime e apreensão da arma utilizada, encontrada junto ao corpo da vítima. A autoria delitiva é inequivocamente atribuída a Rafael Menezes. O próprio réu, em juízo, admitiu ser o autor dos golpes que ceifaram a vida da vítima, ainda que tenha tentado justificar sua conduta sob o argumento de temor decorrente de um gesto da vítima. Essa versão, todavia, é isolada, frágil e desmentida pelo conjunto probatório. Nenhuma arma foi localizada com a vítima, tampouco qualquer indício de que estivesse armada ou prestes a atacar o réu. A dinâmica dos fatos revela execução ardilosa e previamente articulada. Após discussão anterior, o acusado deixou o bar, retornando cerca de quarenta minutos depois encapuzado, posicionou-se em ponto cego e aguardou o momento em que a vítima estivesse desprevenida. O ataque foi realizado de forma súbita e pelas costas, circunstância que evidencia o emprego de recurso que impossibilitou qualquer defesa eficaz por parte da vítima, caracterizando, nos termos do art. 121, §2º, IV, do Código Penal, a qualificadora do recurso que dificultou a defesa do ofendido. Paralelamente, o exame necroscópico demonstrou que a vítima foi atingida por seis golpes profundos de faca, localizados em regiões vitais do corpo, com marcas de lesões defensivas nos braços e tempo de agonia estimado em quatro minutos antes do óbito. Tal modo de execução extrapola o dolo homicida simples e revela especial perversidade na conduta do agente, configurando a qualificadora do meio cruel, prevista no art. 121, §2º, III, do Código Penal. Ambas as qualificadoras encontram respaldo direto na prova técnica e oral produzida em juízo e não decorrem de conjecturas ou agravamento subjetivo da imputação, sendo consequência jurídica da própria realidade fática delineada nos autos. Presentes a prova da materialidade e os indícios suficientes de autoria, plenamente demonstrados nos autos, deve o acusado ser pronunciado, com fundamento no juízo positivo de admissibilidade da acusação, nos termos do art. 413 do Código de Processo Penal.

IV) Conclusão Diante do exposto, o Ministério Público requer a rejeição da preliminar de nulidade arguida pela defesa e a consequente pronúncia de Rafael Menezes nos termos do art. 413 do CPP, como incurso nas sanções do artigo 121, §2º, incisos III e IV, do Código Penal, conforme emendatio libelli.

Local, data. Promotor de Justiça`
  },
  {
    id: "crime-8",
    category: "Crime",
    title: "8. Estrutura/Modelo - Apelação",
    content: `AO JUÍZO DA... VARA CRIMINAL / DO TRIBUNAL DO JÚRI DA COMARCA DE.../UF Autos n.º...

O MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA, pelo Promotor de Justiça em exercício nesta Promotoria, nos termos do art. 129, I, da Constituição Federal (CF), art. 25, III, da Lei n.º 8.625/1993, art... da Lei Complementar Estadual n.º XXXX/XXXX [Lei Orgânica do MPXX]; art. 593, inciso... / art. 416 Código de Processo Penal (CPP), vem, à presença de Vossa Excelência, interpor APELAÇÃO, em face da sentença / decisão interlocutória que... proferida nos autos da ação penal promovida por este órgão contra NOME, pelos fatos e fundamentos a seguir.

Oferece, desde já, as razões de inconformismo; e após a apresentação das contrarrazões, requer seja recebido e encaminhado o recurso ao Tribunal "ad quem".

Local, data. Promotor de Justiça

RAZÕES RECURSAIS Autos n.º... ...Vara Criminal de... Apelante: Apelado:

Egrégio Tribunal, Colenda Turma, Douta Procuradoria de Justiça,

1 – DO RELATÓRIO Trata-se de ação penal promovida pelo Ministério Público em face do Réu Nome porque no dia..., local..., fato... A denúncia foi recebida (fls...). Resposta à acusação (fls...). Durante a instrução, a vítima foi ouvida (fls...), além das testemunhas (fls...). Ao final, foi interrogado o Réu (fls...). O exame / laudo está juntado a fls... Em memoriais, o MP pugnou pela...; enquanto a defesa pela... Por fim, o magistrado proferiu sentença... Inconformado com a Respeitável sentença, o Ministério Público interpõe o presente recurso de Apelação com o objetivo de... É o breve relatório. Passo à manifestação.

2 – DOS PRESSUPOSTOS DE ADMISSIBILIDADE RECURSAL O recurso é cabível, pois da sentença / decisão interlocutória que... cabe apelação (art. 593, inciso..., do CPP / art. 416 do CPP). Ademais, o recurso é tempestivo, uma vez que interposto dentro do prazo de cinco dias e oferecida as razões dentro de oito (arts. 593, "caput", e 600, do CPP). Por se tratar do MP, encontra-se dispensado do preparo (art. 1.007, §1.º, do CPC). Por fim, existe legitimidade recursal do MP (art. 577 do CPP). Assim, requer-se o conhecimento do presente recurso.

3 – DAS PRELIMINARES DE MÉRITO 3.1 DA NULIDADE DA SENTENÇA É evidente a nulidade da sentença, pois o juízo prolator... Deste modo, em sendo a sentença nula, deve-se determinar o retorno ao juízo de primeiro grau para que profira outra, com a devida fundamentação, evitando-se a supressão de instância. Passa-se, portanto, à análise do mérito.

4 – DO MÉRITO 4.1 – DA MATERIALIDADE DELITIVA E DA AUTORIA

Indicar provas que comprovem a materialidade do fato. A materialidade delitiva em relação ao delito de... restou devidamente comprovada em razão do... laudo... e exame...., aliado aos depoimentos colhidos na instrução criminal.

Indicar provas que comprovem a autoria Ademais, a autoria é certa e segura ante as provas carreadas nos autos. As testemunhas afirmaram que...; outrossim, o próprio Réu afirmou em seu interrogatório que...

Conclusão Dessa forma, as provas coligidas aos autos são cristalinas e aptas a comprovar a responsabilidade do Acusado pela prática do delito em tela devendo ser condenado.

Rebater teses defensivas (se existentes). Pondere-se, ainda, que a defesa objetiva... Ocorre que referido argumento não merece acolhida, porquanto...

4.2 – OUTROS

Manifestar expressamente sobre outras teses trazidas no enunciado.

5 – DO PREQUESTIONAMENTO Caso não acolhidos os pedidos, fica desde já prequestionada a violação ao art... da Lei..., possibilitando que o tema seja revisitado por meio de Recurso Especial / Recurso Extraordinário perante o STF/STJ.

6 – DOS PEDIDOS Ante o exposto, o Ministério Público requer o recebimento e conhecimento do presente recurso; preliminarmente, a nulidade da sentença atacada, com a determinação de que outra seja proferida ante a....; no mérito, seja provido o recurso, determinando a reforma da sentença para que...; seja prequestionada a violação aos art... da Lei caso não reconhecidos em sede de apelação, permitindo-se o manejo de RE/REsp para tal fins perante o STF/STJ.

Local, data. Promotor de Justiça`
  },
  {
    id: "crime-9",
    category: "Crime",
    title: "9. Estrutura/Modelo - Recurso em Sentido Estrito (RESE)",
    content: `AO JUÍZO DA... VARA CRIMINAL / DO TRIBUNAL DO JÚRI DA COMARCA DE.../UF Autos n.º...

O MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA, pelo Promotor de Justiça em exercício nesta Promotoria, nos termos do art. 129, I, da Constituição Federal (CF), art. 25, III, da Lei n.º 8.625/1993, art... da Lei Complementar Estadual n.º XXXX/XXXX [Lei Orgânica do MPXX]; art. 581, inciso... do Código de Processo Penal (CPP), vem, à presença de Vossa Excelência, interpor RECURSO EM SENTIDO ESTRITO (RESE), em face da decisão interlocutória que... proferida nos autos da ação penal / inquérito policial...

Oferece, desde já, as razões de inconformismo; e requer seja recebido e conhecido o presente recurso, observada a oportunidade de retratação (art. 589 do CPP) e, caso mantida a decisão, seja formado o instrumento com as peças de fls... (art. 587 do CPP), sendo intimada a parte contrária para apresentação de contrarrazões e, em seguida, encaminhado o recurso ao Tribunal "ad quem".

Local, data. Promotor de Justiça

RAZÕES RECURSAIS Autos n.º... Recorrente: Recorrido:

Egrégio Tribunal, Colenda Turma, Douta Procuradoria de Justiça, Nobre Magistrado,

1 – DO RELATÓRIO Trata-se de ação penal promovida pelo Ministério Público em face do Réu Nome porque no dia..., local..., fato... A denúncia foi recebida (fls...). Resposta à acusação (fls...). Durante a instrução, a vítima foi ouvida (fls...), além das testemunhas (fls...). Ao final, foi interrogado o Réu (fls...). O exame / lado está juntado a fls... Em memoriais, o MP pugnou pela...; enquanto a defesa pela... Por fim, o magistrado proferiu decisão... Inconformado com a Respeitável decisão interlocutória, o Ministério Público interpõe o presente recurso em sentido estrito com o objetivo de... É o breve relatório. Passo à manifestação.

2 – DOS PRESSUPOSTOS DE ADMISSIBILIDADE RECURSAL O presente recurso é cabível, pois da decisão que... cabe recurso em sentido estrito (art. 581, inciso..., do CPP). Ademais, o recurso é tempestivo, uma vez que interposto dentro do prazo de cinco dias e oferecida as razões dentro de dois (arts. 586, "caput" e 588, do CPP). Por se tratar do MP, encontra-se dispensado do preparo (art. 1.007, §1.º, do CPC). Por fim, existe legitimidade recursal do MP (art. 577 do CPP). Assim, requer-se o conhecimento do presente recurso.

3 – DAS PRELIMINARES DE MÉRITO 3.1 DA NULIDADE DA DECISÃO É evidente a nulidade da decisão, pois o juízo prolator... Deste modo, em sendo a decisão nula, deve-se determinar o retorno ao juízo de primeiro grau para que profira outra, com a devida fundamentação, evitando-se a supressão de instância. Passa-se, portanto, à análise do mérito.

4 – DO MÉRITO 4.1 – DA MATERIALIDADE DELITIVA E DA AUTORIA

Indicar provas que comprovem a materialidade do fato. A materialidade delitiva em relação ao delito de... restou devidamente comprovada em razão do... laudo... e exame...., aliado aos depoimentos colhidos na instrução criminal.

Indicar provas que comprovem a autoria Ademais, a autoria é certa e segura ante as provas carreadas nos autos. As testemunhas afirmaram que...; outrossim, o próprio Réu afirmou em seu interrogatório que...

5 – DOS PEDIDOS Ante o exposto, o Ministério Público requer: o recebimento e conhecimento do presente recurso; preliminarmente, a nulidade da decisão atacada, com a determinação de que outra seja proferida ante a....; no mérito, seja provido o recurso, determinando a reforma da decisão para que...

Local, data. Promotor de Justiça`
  },
  {
    id: "crime-10",
    category: "Crime",
    title: "10. Estrutura/Modelo - Agravo em Execução Penal",
    content: `AO JUÍZO DA... VARA... DA COMARCA DE..., NO ESTADO DE... AUTOS N.º...

O MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA(...), pelo Promotor de Justiça em exercício nesta Promotoria, nos termos do art. 129, I, da Constituição Federal (CF), art. 25, III, da Lei n.º 8.625/1993; art... da Lei Complementar Estadual n.º XXXX/XXXX [Lei Orgânica do MPXX]; art. 197 da Lei nº 7.210/84 (Lei de Execução Penal – LEP), vem, à presença de Vossa Excelência, interpor AGRAVO EM EXECUÇÃO, em face da decisão que... proferida nos autos da execução penal movida contra RÉU, pelos fatos e fundamentos a seguir.

Requer seja recebido e conhecido o presente recurso, observada a oportunidade de retratação (art. 589 do CPP) e, caso mantida a decisão, seja formado o instrumento com as peças constantes nas fls... (art. 587 do CPP), sendo intimada a parte contrária para apresentação de contrarrazões e, em seguida, encaminhado o recurso ao Tribunal "ad quem".

Local, data. Promotor de Justiça

RAZÕES RECURSAIS AUTOS N.º... ORIGEM: AGRAVANTE: AGRAVADO:

Egrégio Tribunal, Colenda Turma, Douta Procuradoria de Justiça, Nobre Magistrado,

1 – DO RELATÓRIO Trata-se de execução penal movida contra o Réu pela condenação ao delito do art... O magistrado proferiu decisão determinando que... Inconformado com a Respeitável decisão interlocutória, o Ministério Público interpõe o presente recurso com o objetivo de... É o breve relatório. Passo à manifestação.

2 – DOS PRESSUPOSTOS DE ADMISSIBILIDADE RECURSAL O presente recurso é cabível, pois da decisão [fundamento] cabe o agravo em execução (art. 197 da Lei nº 7.210/84). Ademais, o recurso é tempestivo, uma vez que interposto dentro do prazo de cinco dias, conforme entendimento sumulado do STF. Por se tratar do MP, encontra-se dispensado do preparo (art. 1.007, §1.º, do CPC). Por fim, existe legitimidade recursal do MP (art. 577 do CPP). Assim, requer-se o conhecimento do presente recurso.

3 – DAS PRELIMINARES DE MÉRITO 3.1 DA NULIDADE DA DECISÃO É evidente a nulidade da decisão, pois o juízo prolator... Deste modo, em sendo a decisão nula, deve-se determinar o retorno ao juízo de primeiro grau para que profira outra, com a devida fundamentação, evitando-se a supressão de instância. Passa-se, portanto, à análise do mérito.

4 – DO MÉRITO 4.1 – ASSUNTO

5 – DOS PEDIDOS Ante o exposto, o Ministério Público requer: o recebimento e conhecimento do presente recurso; preliminarmente, a nulidade da decisão atacada, com a determinação de que outra seja proferida ante a.... no mérito, seja provido o presente recurso, determinando a reforma da decisão para que...

Local, data. Promotor de Justiça`
  },
  {
    id: "crime-11",
    category: "Crime",
    title: "11. Estrutura/Modelo - Contrarrazões Recursais (Apelação)",
    content: `PROCESSO Nº APELANTE: Fábio Augusto Ribeiro APELADO: MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA

CONTRARRAZÕES DE APELAÇÃO

EGRÉGIO TRIBUNAL, NOBRES JULGADORES, DOUTA PROCURADORIA DE JUSTIÇA

O apelante FÁBIO AUGUSTO RIBEIRO foi condenado como incurso no artigo 217-A, caput, por três vezes, na forma do artigo 71 do Código Penal, combinado com a causa de aumento do art. 226, II e agravante do art. 61, II, "f", ambas do CP, à pena de 18 anos de reclusão, em regime fechado. Inconformado, interpôs apelação, sustentando, em preliminares, a nulidade pela ausência de ANPP e cerceamento de defesa por indeferimento de acareação. No mérito, pugna pela absolvição por insuficiência probatória ou, subsidiariamente, desclassificação para o art. 215 do CP, afastamento da continuidade delitiva e redução da pena. É o breve relato.

DA ADMISSIBILIDADE RECURSAL O recurso interposto merece ser conhecido, porquanto preenchidos todos os requisitos de admissibilidade, tanto de ordem objetiva quanto subjetiva, conforme preceitua o artigo 593 e seguintes do Código de Processo Penal. Com efeito, a apelação foi interposta dentro do prazo legal. O recorrente é parte legitimada (CPP, art. 577), possui interesse recursal, haja vista a sucumbência penal, e o recurso reveste-se de adequação, uma vez que visa impugnar sentença penal condenatória, hipótese expressamente contemplada no inciso I do art. 593 do CPP. Assim, ausentes quaisquer causas de inadmissibilidade ou irregularidade formal, impõe-se o conhecimento da apelação interposta.

DAS PRELIMINARES

Inaplicabilidade do Acordo de Não Persecução Penal (ANPP) Não há qualquer nulidade pela ausência de ANPP. O artigo 28-A do CPP exige a ausência de violência ou grave ameaça e pena mínima inferior a 4 anos. O tipo penal do art. 217-A do CP, além de prever pena mínima superior a tal limite (8 anos), envolve violência presumida, tornando o instituto manifestamente inaplicável.


Indeferimento de acareação e cerceamento de defesa A jurisprudência é pacífica no sentido de que a acareação é medida discricionária e não obrigatória (CPP, art. 229), podendo ser indeferida quando os elementos probatórios forem suficientes, como no caso em tela. A alegada contradição entre os depoimentos da vítima e da genitora não justifica a diligência.


DO MÉRITO

Autoria e materialidade comprovadas A condenação do réu encontra amparo em acervo probatório consistente, formado sob o crivo do contraditório e da ampla defesa, apto a demonstrar, com segurança jurídica, a ocorrência do delito e sua autoria. A materialidade do crime restou evidenciada por meio do laudo psicológico constante dos autos, o qual atestou a presença de indicadores compatíveis com situações de abuso sexual, bem como pelas declarações firmes e coerentes prestadas pela vítima em sede de depoimento especial (Lei nº 13.431/2017). A autoria, da mesma forma, é insofismável. A negativa isolada do apelante encontra-se frontalmente dissociada do conjunto probatório. A palavra da vítima, corroborada pelos depoimentos testemunhais (genitora e conselheira tutelar), aponta de forma uníssona o apelante como o autor dos atos libidinosos. Em crimes contra a dignidade sexual, frequentemente praticados às ocultas, a palavra da vítima, quando colhida de forma adequada e revestida de coerência e verossimilhança, possui especial relevância e pode, inclusive, fundamentar a condenação. Diante disso, restando incontroversos os elementos caracterizadores da infração penal — tanto no que tange à materialidade quanto à autoria —, mostra-se escorreita a condenação imposta, não havendo margem para acolhimento da tese absolutória fundada em pretensa insuficiência probatória.


Impossibilidade de desclassificação A pretensão defensiva de desclassificação da conduta para o crime do art. 215 do CP carece de amparo fático e jurídico, revelando-se absolutamente infundada frente ao conjunto probatório judicializado. Consoante delineado nos autos, o réu praticou reiterados atos libidinosos contra sua enteada, então com 8 (oito) anos de idade, consistentes em toques em suas partes íntimas, com inequívoca conotação sexual e no contexto de abuso da relação de confiança, exercida em ambiente doméstico e familiar. Os fatos ocorreram durante diversos finais de semana, ocasião em que a vítima permanecia sob os cuidados do padrasto, circunstância que agrava a reprovabilidade da conduta e demonstra o dolo específico de satisfazer a lascívia, elemento subjetivo exigido pelo tipo penal. Tais atos, por sua natureza, conteúdo e reiteração, configuram de forma plena o delito de estupro de vulnerável, previsto no art. 217-A, caput, do Código Penal, que tutela a liberdade sexual de crianças e adolescentes, cuja incapacidade para consentimento é presumida ex lege, independentemente de violência física ou grave ameaça (art. 217-A, caput, in fine, do CP).


Correta aplicação da continuidade delitiva A vítima relatou a reiteração dos atos em mais de três finais de semana, o que revela pluralidade de condutas da mesma espécie, em circunstâncias semelhantes, como exige o art. 71 do CP. A jurisprudência do STJ admite a palavra da vítima como suficiente para reconhecimento da continuidade delitiva, desde que coerente e harmônica, como no presente caso.


Dosimetria da pena e regime fechado A pena-base foi fixada de forma justa e proporcional, em estrita observância aos critérios estabelecidos no art. 59 do Código Penal. A configuração da agravante da violência doméstica (art. 61, II, "f") é perfeitamente compatível com a causa de aumento do art. 226, II. O entendimento foi sedimentando pelo STJ, em casos que a circunstância fática possibilidade delimitar os pontos, evitando bis in idem. No caso, a agravante foi fundamentada na situação de violência doméstica, considerando as provas que demonstraram que o crime foi praticado em contexto de visitas da criança ao padrasto. Já a causa de aumento de pena está relacionada ao parentesco (enteada-padrasto) de ordem objetiva. Dessa forma, a pena imposta mostra-se adequada, proporcional e suficiente à repressão e prevenção do crime praticado, não havendo reparo a ser feito no tocante à dosimetria promovida na sentença. Considerando o quantum de pena e circunstâncias do caso concreto, de rigor é a imposição do regime fechado, conforme art. 33, §2, "a" do CP.


DO PEDIDO Diante de todo o exposto, o Ministério Público requer:

O conhecimento do presente recurso de apelação, por estarem preenchidos seus pressupostos de admissibilidade, nos termos do art. 593 do Código de Processo Penal;

No mérito, o seu integral desprovimento, a fim de que seja mantida a r. sentença guerreada por seus próprios e jurídicos fundamentos, preservando-se a validade da instrução, a regularidade do processo e a correta subsunção dos fatos ao tipo penal imputado, com observância dos princípios da legalidade, da proteção integral da vítima e da efetividade da persecução penal.

São Lourenço da Serra, ___ de __________ de 2025. Promotor de Justiça`
  },
  {
    id: "crime-12",
    category: "Crime",
    title: "12. Estrutura/Modelo - Contrarrazões Recursais (Recurso em Sentido Estrito)",
    content: `Processo nº Recorrente: Alexandre Ramos Recorrido: MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA

CONTRARRAZÕES AO RECURSO EM SENTIDO ESTRITO EGRÉGIO TRIBUNAL DE JUSTIÇA DO ESTADO DE SÃO PAULO COLENDA CÂMARA CRIMINAL DOUTA PROCURADORIA DE JUSTIÇA

O MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA, por seu Promotor de Justiça signatário, no uso de suas atribuições constitucionais e legais, vem, respeitosamente, apresentar CONTRARRAZÕES AO RECURSO EM SENTIDO ESTRITO interposto pela defesa técnica de ALEXANDRE RAMOS, com fundamento no art. 588, caput, do Código de Processo Penal, pelos motivos de fato e de direito expostos a seguir.

I – BREVE SÍNTESE FÁTICO-PROCESSUAL O recorrente ALEXANDRE RAMOS foi denunciado como incurso nas sanções do artigo 121, § 2º, incisos II e IV, do Código Penal. Ao término da primeira fase do rito do júri (judicium accusationis), o MM. Juízo da ___ Vara Criminal da Comarca de ___ proferiu decisão de pronúncia, reconhecendo a presença dos requisitos do art. 413 do CPP. Contra essa decisão, a defesa interpôs Recurso em Sentido Estrito, sustentando diversas preliminares de nulidade e teses de mérito, inclusive desclassificação e pedido de revogação da prisão preventiva. É o breve relatório.

II - DA ADMISSIBILIDADE RECURSAL O recurso interposto merece ser conhecido, porquanto preenchidos todos os requisitos de admissibilidade, tanto de ordem objetiva quanto subjetiva, conforme preceitua o artigo 581 e seguintes do Código de Processo Penal. Com efeito, o recurso em sentido estrito foi interposto dentro do prazo legal. O recorrente é parte legitimada (CPP, art. 577), possui interesse recursal, haja vista a sucumbência penal, e o recurso reveste-se de adequação, uma vez que visa impugnar sentença de pronúncia, hipótese expressamente contemplada no inciso IV do art. 581 do CPP. Assim, ausentes quaisquer causas de inadmissibilidade ou irregularidade formal, impõe-se o conhecimento do recurso em sentido estrito interposto.

III – DA AUSÊNCIA DE NULIDADE POR FALTA DE INTIMAÇÃO SOBRE O LAUDO COMPLEMENTAR Não merece guarida a alegação de nulidade por ausência de intimação da defesa quanto ao laudo complementar de balística. O documento em questão foi regularmente juntado aos autos com publicação no Diário da Justiça Eletrônico, e a defesa estava devidamente constituída. A jurisprudência é pacífica no sentido de que, havendo defensor constituído, a intimação pelo DJE é válida e eficaz. Ademais, não se demonstrou prejuízo concreto, como exige o art. 563 do CPP (princípio do pas de nullité sans grief). A defesa não apenas deixou de requerer prazo para manifestação, como também não formulou quesitos ao perito nem indicou de que modo eventual impugnação poderia alterar o conjunto probatório. A nulidade arguida, portanto, é meramente formal e sem reflexo prático no exercício da ampla defesa, hipótese que não autoriza a desconstituição do ato decisório.

IV – INEXISTÊNCIA DE NULIDADE POR INDEFERIMENTO DE TESTEMUNHAS A negativa de oitiva de duas testemunhas arroladas pela defesa deu-se com base em fundamentação idônea, diante de sua manifesta irrelevância. As testemunhas pretendidas não tinham relação direta com os fatos, tampouco poderiam trazer esclarecimentos úteis sobre a dinâmica do crime. Nos termos do art. 400, §1º, do CPP, o juiz poderá indeferir as provas que considerar irrelevantes, impertinentes ou protelatórias, sendo essa prerrogativa compatível com a condução racional do processo penal e com a vedação ao uso abusivo da ampla defesa. A atuação do juízo a quo, portanto, foi técnica e compatível com o poder-dever de direção do processo, não havendo qualquer vício invalidante.

V – DOS INDÍCIOS SUFICIENTES DE AUTORIA E DA PROVA DA MATERIALIDADE DELITIVA A decisão de pronúncia encontra-se devidamente alicerçada em acervo probatório consistente e juridicamente idôneo, revelador da presença dos pressupostos exigidos pelo art. 413 do Código de Processo Penal, quais sejam: a existência de prova da materialidade do delito e a presença de indícios suficientes de autoria. A materialidade do homicídio encontra-se de forma inequívoca demonstrada pelo laudo de exame necroscópico, que atestou a causa violenta da morte por ferimentos provocados por projéteis de arma de fogo, bem como pelo laudo balístico complementar, que confirmou a compatibilidade entre os projéteis recolhidos no corpo da vítima e a arma de fogo potencialmente utilizada na empreitada delituosa. Quanto à autoria, esta se encontra suficientemente delineada pelos seguintes elementos probatórios:

Depoimento da testemunha ocular, cuja narrativa, conquanto prestada sob possível influência de consumo etílico, revelou-se firme, coesa e compatível com os demais elementos dos autos, evidenciando discernimento mínimo para percepção da dinâmica dos fatos, conforme jurisprudência reiterada dos Tribunais Superiores;

Imagens parciais de câmeras de segurança, que, embora não capturem o exato instante dos disparos, retratam de forma objetiva o comportamento do acusado, que aguarda a saída da vítima do bar, persegue-a e se evadiu do local logo após os disparos, conduta típica de quem busca evitar a responsabilização penal;

Conjunto indiciário coerente, extraído da concatenação entre os elementos testemunhais, os registros audiovisuais e os exames periciais, permitindo a formulação de um juízo de probabilidade qualificada — suficiente e necessária à submissão do acusado ao crivo do Conselho de Sentença, nos moldes da jurisprudência consolidada do Superior Tribunal de Justiça:

Dessarte, é plenamente válida e juridicamente amparada a decisão de pronúncia proferida pelo juízo a quo, inexistindo qualquer vício ou excesso a ser corrigido na via recursal.

VI – INVIABILIDADE DE DESCLASSIFICAÇÃO PARA HOMICÍDIO PRIVILEGIADO A tese de homicídio privilegiado, fundada no domínio de violenta emoção, não encontra qualquer suporte probatório mínimo nos autos. A simples menção a desavenças pretéritas ou discussões em ambiente de bar, por si, não é suficiente para caracterizar emoção violenta causada por injusta provocação da vítima. Pelo contrário: os elementos constantes nos autos indicam que o réu aguardou a vítima sair do bar, agiu com frieza, portando arma de fogo, e executou disparos letais no abdômen e na cabeça — conduta que evidencia deliberação consciente, incompatível com impulso emocional incontrolável. Ademais, o domínio de violenta emoção deve ser atual, intenso e motivado por provocação inequivocamente injusta, o que não restou demonstrado no caso concreto.

VII – AUSÊNCIA DE LEGÍTIMA DEFESA OU EXCESSO CULPOSO A alegação de legítima defesa ou de excesso culposo não possui lastro mínimo nos autos. Nenhuma testemunha presenciou qualquer atitude ofensiva por parte da vítima, tampouco foram encontrados objetos como faca ou similares em poder desta. A tese do réu é unilateral, autojustificativa e dissociada da prova oral e pericial. A dinâmica descrita no processo revela que o réu aguardou deliberadamente a saída da vítima do bar para abordá-la e executar os disparos, o que afasta a atualidade da agressão e a necessidade da reação. Nos termos do art. 23, parágrafo único, do Código Penal, o excesso culposo exige que a conduta tenha sido inicialmente amparada por uma excludente legítima, o que não se verifica. Não se pode cogitar de excesso onde não há sequer agressão anterior legítima ou iminente por parte da vítima.

VIII – PRISÃO PREVENTIVA E FUNDAMENTAÇÃO DA DECISÃO A manutenção da prisão preventiva encontra respaldo no art. 312 e também no art. 313, I, ambos do CPP, por se tratar de crime doloso contra a vida com pena privativa de liberdade superior a quatro anos. A decisão de pronúncia reafirmou fundamentos concretos da prisão cautelar, destacando:

A periculosidade do agente, que agiu com frieza e uso de arma de fogo em local público;

A gravidade concreta da conduta, pelo modo de execução (dois disparos à queima-roupa, em região vital);

O risco de reiteração delitiva e abalos à ordem pública local, considerando o histórico conflituoso entre réu e vítima. Não se trata de fundamentação in abstrato, mas de análise pormenorizada do caso concreto, com observância do art. 413, §3º, do CPP, que expressamente permite a manutenção da prisão preventiva após a decisão de pronúncia, desde que persistam seus fundamentos.

IV – CONCLUSÃO Diante do exposto, o Ministério Público requer o conhecimento do recurso e:

O não provimento das preliminares de nulidade, por ausência de demonstração de prejuízo concreto, nos termos do art. 563 do Código de Processo Penal e em consonância com o princípio do pas de nullité sans grief, aplicável à atividade jurisdicional penal;

No mérito, o desprovimento integral do Recurso em Sentido Estrito, com a consequente manutenção da decisão de pronúncia em sua integralidade, porquanto devidamente fundamentada nos moldes do art. 413 do CPP, revelando-se presentes os requisitos de admissibilidade da acusação, com base em indícios suficientes de autoria e prova da materialidade delitiva;

A preservação da prisão preventiva do recorrente, por persistirem, de forma concreta, os fundamentos cautelares previstos nos arts. 312 e 313, I, do CPP, além daqueles elencados na pronúncia.

Rio Azul/SP, data da assinatura. Promotor de Justiça`
  },
  {
    id: "crime-13",
    category: "Crime",
    title: "13. Estrutura/Modelo - Contrarrazões Recursais (Agravo em Execução)",
    content: `Execução Penal nº ____________ Agravante: ANTÔNIO CARLOS VIEIRA Agravado: MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA

CONTRARRAZÕES AO AGRAVO EM EXECUÇÃO

EGRÉGIO TRIBUNAL DE JUSTIÇA DO ESTADO DE SÃO PAULO COLENDA CÂMARA CRIMINAL DOUTA PROCURADORIA DE JUSTIÇA

I – SÍNTESE DO CASO ANTÔNIO CARLOS VIEIRA cumpre pena de 11 anos de reclusão, em regime fechado, por estupro de vulnerável e furto qualificado, crimes praticados em 2019 e 2021. No curso da execução, o juízo determinou: (i) a coleta de material genético nos termos do art. 9º-A da LEP; (ii) a exigência de exame criminológico como condição à progressão. Contra essas decisões, a defesa interpôs agravo em execução, alegando, respectivamente, afronta à vedação à autoincriminação e retroatividade indevida da Lei nº 14.843/2024.

II – DA ADMISSIBILIDADE RECURSAL O agravo em execução deve ser conhecido, pois interposto nos moldes do art. 197 da LEP. A defesa é parte legítima, o recurso foi apresentado tempestivamente e visa decisões interlocutórias proferidas no curso da execução penal. Estão presentes os requisitos objetivos e subjetivos de admissibilidade, impondo-se seu regular processamento.

III – DA LEGITIMIDADE DA COLETA DO PERFIL GENÉTICO (ART. 9º-A DA LEP) A alegação de inconstitucionalidade da exigência legal de coleta de material genético não resiste à análise à luz da jurisprudência consolidada do Superior Tribunal de Justiça. A coleta do perfil genético não viola os direitos à intimidade ou à não autoincriminação, pois se trata de técnica de identificação pessoal de natureza não invasiva, realizada independentemente da existência de investigação específica. O escopo do art. 9º-A da LEP é de natureza registral e estatística, com vistas à formação de banco de dados nacional que auxilie a prevenção e repressão a delitos futuros, não servindo como meio de prova em desfavor do apenado em processos específicos. Trata-se de mecanismo de polícia judiciária moderno e proporcional, análogo à identificação por impressão digital, cuja obrigatoriedade não é contestada. Assim, o comando normativo impugnado está em consonância com os princípios da legalidade (CF, art. 5º, II), da segurança pública (art. 144, CF) e com o art. 5º, §2º, da Constituição Federal, que permite a limitação de direitos fundamentais mediante lei formalmente válida.

IV – DA LEGITIMIDADE DA EXIGÊNCIA DE EXAME CRIMINOLÓGICO NO CASO CONCRETO A exigência de exame criminológico, no caso em apreço, não decorreu da nova redação do art. 112, §1º, da LEP, introduzida pela Lei nº 14.843/2024, mas sim de decisão judicial prévia, fundada nas peculiaridades concretas do processo, entre elas a reincidência do sentenciado e oscilações relevantes no comportamento carcerário, comprovado pelo atestado negativo no ambiente carcerário. Trata-se de hipótese compatível com o entendimento consolidado na Súmula 439 do STJ, segundo a qual admite-se o exame criminológico desde que motivadamente determinado com base nas circunstâncias do caso. No presente feito, a decisão judicial apenas manteve o indeferimento da progressão em razão da não realização de exame já regularmente deferido e não produzido, sem invocar nova exigência legal. Dessa forma, afasta-se qualquer violação ao princípio da irretroatividade da norma penal mais gravosa (art. 5º, XL, da CF), uma vez que a medida foi adotada com base em fundamentos concretos e não na legislação nova.

V – CONCLUSÃO Diante do exposto, o Ministério Público requer:

O conhecimento do agravo em execução, por preencher os requisitos legais de admissibilidade;

No mérito, o desprovimento integral do recurso defensivo, com a manutenção das decisões proferidas pelo Juízo da Execução, quanto: a) à legalidade da coleta do perfil genético, nos termos do art. 9º-A da LEP; b) à legitimidade do indeferimento da progressão ao regime semiaberto.

Subsidiariamente, requer o prequestionamento dos dispositivos legais abordados.

Serra Azul/SP, data. Promotor de Justiça`
  },

  // ---------------------------------------------------------
  // SEÇÃO: CÍVEL (10 Novos Documentos)
  // ---------------------------------------------------------
  {
    id: "civel-1",
    category: "Cível",
    title: "1. Termo de Ajustamento de Conduta (TAC)",
    content: `TERMO DE COMPROMISSO DE AJUSTAMENTO DE CONDUTA
Procedimento n.º... Compromitente: Ministério Público do Estado de Santa Catarina Compromissário: Objeto:
CONSIDERANDO que o Ministério Público é instituição essencial à função jurisdicional, incumbida constitucionalmente da defesa dos interesses sociais, difusos, coletivos e individuais indisponíveis, nos termos do artigo 127 da Constituição Federal (CF);
CONSIDERANDO que o Estatuto da Criança... (art. 211 da Lei n.º 8.069/1990 e arts. ... do ato normativo do MPE;
CONSIDERANDO que [inserir FUNDAMENTAÇÃO JURÍDICA específica que justifique o ajuste: CF, leis federais, leis estaduais, resoluções etc.];
CONSIDERANDO que [inserir FUNDAMENTAÇÃO FÁTICA, com breve descrição dos fatos que ensejaram a instauração do procedimento e a necessidade do ajuste de conduta];
CONSIDERANDO que o descumprimento das obrigações ora assumidas ensejará a imediata execução do presente instrumento, nos termos do artigo 11 da Resolução n.º 179/2017 do CNMP.
O MINISTÉRIO PÚBLICO DE ESTADO DE SANTA CATARINA, pelo Promotor de Justiça em exercício nesta Promotoria, doravante denominado COMPROMITENTE, e NOME (qualificação), neste ato representado pelo NOME, doravante denominado COMPROMISSÁRIO, nos termos dos art... da Lei Complementar Estadual n.º... [Lei Orgânica do MPE]; arts. 1º, inciso… e 5.º, §6.º, da Lei n.º 7.347/1985; art. 211 da Lei n.º 8.090/1990; art. 3º da Resolução n.º 179/2017 do CNMP; outros, RESOLVEM firmar o presente TERMO DE COMPROMISSO DE AJUSTAMENTO DE CONDUTA, com base nas seguintes cláusulas:
PRIMEIRA CLÁUSULA: DO OBJETO A presente avença tem por objeto: (a) ______; (b) ______;
SEGUNDA CLÁUSULA: DAS OBRIGAÇÕES (DE FAZER, NÃO FAZER OU DAR) Para o cumprimento do objeto ajustado na Cláusula Primeira, o COMPROMISSÁRIO assume as seguintes obrigações: (a) ______; (b) ______;
TERCEIRA CLÁUSULA: DAS MEDIDAS COMPENSATÓRIAS Visando à reparação dos danos decorrentes das condutas ora ajustadas, o COMPROMISSÁRIO compromete-se a realizar o depósito da quantia de R$ ... (valor por extenso), até o dia ______, destinada ao Fundo para Reconstituição de Bens Lesados, em conformidade com o artigo 13 da Lei n.º 7.347/1985, artigo ... da Lei Complementar Estadual n.º ..., artigo 84, §4.º, da Lei n.º 8.078/1990, artigos 213, §2.º e 214 da Lei n.º 8.069/1990, bem como artigos 82, §2.º e 84 da Lei n.º 10.741/2003.
QUARTA CLÁUSULA: DA COMPROVAÇÃO O COMPROMISSÁRIO deverá informar, formalmente e por escrito, ao COMPROMITENTE, o cumprimento das obrigações ajustadas, acompanhando a comunicação com os documentos comprobatórios pertinentes, no prazo máximo de ______ dias após o término de cada etapa prevista no presente termo.
QUINTA CLÁUSULA: DA VIGÊNCIA E DA EFICÁCIA O presente Termo de Ajustamento de Conduta entra em vigor na data de sua assinatura, sendo submetido à homologação do Conselho Superior do Ministério Público (art. 9.º, §2.º, da Lei n.º 7.347/1985) e terá eficácia de título executivo extrajudicial, na forma dos arts. 784, IV, do CPC e 5.º, §6.º, da Lei n.º 7.347/1985
E, por estarem justas e acordadas, as partes assinam o presente termo de ajustamento de conduta, na presença das testemunhas abaixo nomeadas.
Local, data. Promotor de Justiça (Compromitente) Nome (Compromissário) Advogado Testemunhas`
  },
  {
    id: "civel-2",
    category: "Cível",
    title: "2. Recomendação Administrativa",
    content: `RECOMENDAÇÃO ADMINISTRATIVA
Procedimento n.º... Recomendante: MINISTÉRIO PÚBLICO DE ESTADO DE SANTA CATARINA Recomendado: Objeto:
CONSIDERANDO que o Ministério Público é instituição essencial à função jurisdicional, incumbida constitucionalmente da defesa dos interesses sociais, difusos, coletivos e individuais indisponíveis, nos termos do artigo 127 da Constituição Federal (CF);
CONSIDERANDO que a expedição de recomendação administrativa destina-se a orientar o destinatário a praticar ou deixar de praticar determinados atos em benefício da melhoria dos serviços públicos e de relevância pública ou do respeito aos interesses, direitos e bens defendidos pela instituição, atuando, assim, como instrumento de prevenção de responsabilidades ou correção de condutas (art. 1.º da Resolução n.º 164/17 do CNMP e arts. ... do ato normativo do MPE);
CONSIDERANDO que [inserir FUNDAMENTAÇÃO JURÍDICA específica que justifique o ajuste: CF, leis federais, leis estaduais, resoluções etc.];
CONSIDERANDO que [inserir FUNDAMENTAÇÃO FÁTICA, com breve descrição dos fatos que ensejaram a instauração do procedimento e a necessidade do ajuste de conduta];
CONSIDERANDO, também, que o não acatamento desta Recomendação ensejará a adoção das medidas cabíveis para a obtenção do resultado pretendido, em especial o ajuizamento de ação civil pública (art. 11, "caput", da Resolução n.º 164/17 do CNMP).
O MINISTÉRIO PÚBLICO DE ESTADO DE SANTA CATARINA, pelo Promotor de Justiça em exercício nesta Promotoria, nos termos dos arts. 127 e 129, II e III, da CF; 27, "caput", II, e parágrafo único, IV, Lei n.º 8.625/93; Resolução n.º 164/17 do CNMP; art... da Lei Complementar Estadual n.º... [Lei Orgânica do MPE]; outros, RECOMENDA ao Sr. NOME que: (a) ______ [medidas recomendadas] (b) ______ [prazo para adoção das providências]
Ademais, REQUISITA que seja dada, de imediato, ampla divulgação desta Recomendação nos órgãos de publicação dos atos oficiais (art. 9.º da Res. 164/17 do CNMP), bem como no prazo de 30 dias encaminhe ofício a esta Promotoria informando as providências adotadas (arts. 26, I, "b", da Lei n.º 8.625/93 e 10 da Res. 164/17 do CNMP).
Local, data. Promotor de Justiça`
  },
  {
    id: "civel-3",
    category: "Cível",
    title: "3. Acordo de Não Persecução Cível (ANPC)",
    content: `TERMO DE ACORDO DE NÃO PERSECUÇÃO CÍVEL
Procedimento n.º... / Processo n.º... Investigado / Demandado:
CONSIDERANDO que a defesa do patrimônio público e dos princípios constitucionais da Administração, bem como a promoção do inquérito civil e ação civil pública, são atribuições institucionais do Ministério Público (arts. 129, III, da Constituição da República; 25, IV, "b", da Lei n.º 8.625/1993, e art. ... da Lei Complementar Estadual n.º ...);
CONSIDERANDO que os fatos investigados autorizam, em tese, a celebração do acordo de não persecução cível (ANPC); [ARGUMENTOS JURÍDICOS]
CONSIDERANDO que o art. 17-B da Lei n.º 8.429/1992 regulamenta o ANPC; e a Resolução CNMP n.º 306/2025 regulamenta-o no âmbito do Ministério Público [ARGUMENTOS JURÍDICOS]
CONSIDERANDO que (...) [OUTROS ARGUMENTOS JURÍDICOS RELATIVOS AO CASO CONCRETO]
CONSIDERANDO que que o Inquérito Civil n..., instaurado pelo Ministério Público, por este Órgão de Execução, tem por objeto apurar atos, em tese, praticados por _____________, que poderiam ter consistido em _____________; [ARGUMENTOS FÁTICOS]
CONSIDERANDO que (...); [ARGUMENTOS FÁTICOS]
CONSIDERANDO, ainda, que a celebração do presente acordo não afasta, necessariamente, eventual responsabilidade administrativa ou penal pelo mesmo fato, nem importa, automaticamente, no reconhecimento de responsabilidade para outros fins que não os estabelecidos expressamente no ajuste (art. 3.º, §1.º, da Res. CNMP n.º 306/2025);
O MINISTÉRIO PÚBLICO DE ESTADO DE SANTA CATARINA, pelo Promotor de Justiça em exercício nesta Promotoria, doravante denominado COMPROMITENTE, e NOME (qualificação), neste ato representado pelo NOME, doravante denominado COMPROMISSÁRIO, nos termos dos arts. 17-B da Lei n.º 8.429/1992 e da Resolução CNMP n.º 306/2025, RESOLVEM firmar o presente ACORDO DE NÃO PERSECUÇÃO CÍVEL, nos seguintes termos:
CLÁUSULA PRIMEIRA – DO RECONHECIMENTO DA CONDUTA ÍMPROBA O COMPROMISSÁRIO [nome do compromissário] reconhece expressamente a responsabilidade pela prática do ato de improbidade administrativa previsto no art. XX, inciso XX, da Lei n.º 8.429/1992, consubstanciado em [descrição sintética e objetiva da conduta, alinhada aos fatos apurados]. Parágrafo Único. O COMPROMISSÁRIO reconhece, ainda, que a conduta praticada se deu no interesse ou benefício de [nome da pessoa jurídica celebrante, se aplicável].
CLÁUSULA SEGUNDA – DAS OBRIGAÇÕES E SANÇÕES Com a finalidade de reparar os danos causados, prevenir novas infrações, assegurar a probidade administrativa e o interesse público, o COMPROMISSÁRIO assume as seguintes obrigações: (a) a cessação qualquer envolvimento com o ato ilícito previamente descrito, em reconhecimento à responsabilidade assumida na prática da infração; (b) a reparação integral do dano causado ao patrimônio público no valor de R$ , a ser atualizado monetariamente e acrescidos de juros legais a partir da data da prática do ilícito (XX/XX/XXXX), ressalvada a possibilidade de flexibilização dos juros, a depender da situação concreta e da devida justificação, para preservar a atuação resolutiva do Ministério Público; (c) a transferência não onerosa, em favor da entidade lesada, da propriedade de bens, direitos e valores que representem vantagem ou proveito direta ou indiretamente obtido com a infração, no montante de R$, devidamente atualizado monetariamente e acrescido de juros legais desde a data do fato ilícito (XX/XX/XXXX), ressalvada a possibilidade de flexibilização dos juros, a depender da situação concreta e da devida justificação, para preservar a atuação resolutiva do Ministério Público; (d) a perda da função pública de [especificar cargo/função] que ocupa na data de celebração deste acordo / a suspensão dos direitos políticos pelo prazo de _____ anos / a proibição de contratar com o poder público ou de receber benefícios ou incentivos fiscais ou creditícios, direta ou indiretamente, ainda que por intermédio de pessoa jurídica da qual seja sócio majoritário, pelo prazo de _____anos, a contar da assinatura do presente acordo; (e) o compromisso de adotar conduta cooperativa com o Ministério Público e a Justiça na elucidação dos fatos objeto deste acordo, prestando todas as informações e auxílios necessários; (f) o compromisso de comparecer perante o Ministério Público ou em juízo, às suas próprias expensas, sempre que necessário e solicitado para fins de esclarecimento de fatos pertinentes à investigação ou ao processo em curso.
CLÁUSULA TERCEIRA – DAS CONVENÇÕES PROCESSUAIS (a) o custeio da prova pericial e o adiantamento dos honorários periciais correrão por conta exclusiva do(s) COMPROMISSÁRIO(s); (b) o(s) COMPROMISSÁRIO(s) renúncia(m) expressamente ao direito de interpor quaisquer recursos processuais contra decisões homologatórias ou que versem sobre a execução do acordo; (c) as comunicações processuais e intimações poderão ser realizadas por e-mail institucional e/ou por aplicativos de mensagens eletrônicas previamente cadastrados pelas partes e por seus procuradores, reconhecendo-se sua validade para todos os fins de direito.
CLÁUSULA QUARTA – DO CUMPRIMENTO (a) DO FUNDO: O valor correspondente à multa civil e, quando for o caso, ao acréscimo patrimonial ilícito, no montante total de R$ [valor], deverá ser depositado integralmente na conta bancária vinculada ao ente lesado [nome da pessoa jurídica prejudicada pelo ilícito], conforme o § 1º do art. 6.º da Res. CNMP 306/2025. (b) DO PARCELAMENTO: Levando-se em consideração o interesse público, a extensão do dano ou do proveito patrimonial, assim como a capacidade financeira do celebrante, o pagamento da reparação do dano patrimonial, da devolução de bens e valores acrescidos ilicitamente e da multa civil será realizado em [número de parcelas] parcelas mensais e consecutivas de R$ [valor de cada parcela], com vencimento em [dia do mês] de cada mês, a partir de [mês/ano de início], mediante [especificar forma de pagamento], conforme o § 2.º do art. 6.º da Res. CNMP 306/2025. (c) DO DESCONTO EM FOLHA: Considerando que o COMPROMISSÁRIO percebe subsídios, vencimentos ou proventos pagos por órgãos públicos ou por instituto de previdência, e por se tratar de medida conveniente ao interesse público, será realizado desconto mensal em sua remuneração para fins de cumprimento das obrigações assumidas no presente acordo, nos termos do § 3.º do art. 6.º da Res. CNMP 306/2025. (d) DA DIVISÃO DAS RESPONSABILIDADES: Nos termos do § 4.º do art. 6.º da Res. CNMP 306/2025, admite-se a divisão de responsabilidades entre os COMPROMISSÁRIOS, razão pela qual convenciona-se que o valor total do dano, fixado em R$ [valor], será reparado de forma proporcional à atuação de cada envolvido, nos seguintes termos: NOME: responsabiliza-se pelo montante de R$ [valor]; NOME: responsabiliza-se pelo montante de R$ [valor].
CLÁUSULA QUINTA – DAS GARANTIAS E DA INDISPONIBILIDADE DE BENS Para assegurar o cumprimento das obrigações financeiras assumidas, o COMPROMISSÁRIO oferece em garantia o(s) seguinte(s) bem(ns): [descrever os bens em detalhes, informando localização, matrícula, valor estimado e outras características relevantes]. Fica autorizada, desde logo, a manutenção/decretação judicial de indisponibilidade dos referidos bens, até o integral cumprimento do acordo, com a expedição de ofícios aos Cartórios de Registro de Imóveis e ao DETRAN para averbação da restrição.
CLÁUSULA SEXTA – DO DESCUMPRIMENTO O descumprimento total ou parcial de qualquer das cláusulas deste ANPC acarretará: (a) o vencimento antecipado e imediato das parcelas vincendas, bem como de todas as obrigações pendentes; (b) a execução judicial imediata do título executivo extrajudicial/judicial constituído por este acordo, acrescido de multa de _% ( por cento) sobre o valor inadimplido, além de juros de mora e correção monetária na forma da lei; (c) a retomada do curso do processo judicial ou das investigações no âmbito do Ministério Público, utilizando-se das provas colhidas e dos elementos constantes do procedimento, caso não haja a quitação integral do dano; e (d) a comunicação aos órgãos competentes para adoção de outras medidas administrativas ou disciplinares cabíveis.
CLÁUSULA SÉTIMA – DA EFICÁCIA A eficácia deste acordo fica condicionada à sua homologação pelo CSMP, no prazo de até 60 dias e, na sequência, pelo órgão jurisdicional (art. 17-B, §1.º, II e III, da Lei n.º 8.429/1992 e art. 6.º, inciso XVII, da Res. CNMP n.º 306/2025). [SE O ANPC FOR EXTRAJUDICIAL] A eficácia deste acordo fica condicionada à sua homologação pelo órgão jurisdicional (art. 17-B, §1.º, III, da Lei n.º 8.429/1992; arts. 487, III e 515, II, do CPC e art. 6.º, inciso XVII, da Res. CNMP n.º 306/2025). [SE ANPC FOR JUDICIAL]
O presente acordo, depois de lido e acatado, é assinado para que surta os devidos efeitos, sem prejuízo da responsabilização na esfera eleitoral e/ou criminal.
Local, data. Promotor de Justiça Investigado / Demandado Advogado`
  },
  {
    id: "civel-4",
    category: "Cível",
    title: "4. Ação Civil Pública",
    content: `EXCELENTÍSSIMO SENHOR JUIZ DE DIREITO DA... VARA... DA COMARCA DE..., NO ESTADO DE... ou AO JUÍZO DA... VARA... DA COMARCA DE..., NO ESTADO DE...
O MINISTÉRIO PÚBLICO DE ESTADO DE SANTA CATARINA, pelo Promotor de Justiça em exercício nesta Promotoria, nos termos dos arts. 127 e 129, III, da Constituição Federal (CF); art. 25, IV, da Lei n.º 8.625/1993; art... da Lei Complementar Estadual n.º... [Lei Orgânica do MPE]; arts. 1.º e 5.º, I, da Lei n.º 7.347/1985; art. 82, I, do Código de Defesa do Consumidor (CDC); outros; e o art. 319 do Código de Processo Civil (CPC), vem, respeitosamente, à presença de Vossa Excelência, propor a presente AÇÃO CIVIL PÚBLICA (COM PEDIDO DE TUTELA DE URGÊNCIA EM CARÁTER LIMINAR) em face de:
Estado de ..., pessoa jurídica de direito público interno, representado por seu Procurador-Geral (art. 75, II, do CPC);
Município de ..., pessoa jurídica de direito público interno, representado por seu Prefeito ou Procurador Municipal (art. 75, III, do CPC);
Nome Pessoa Jurídica, pessoa jurídica de direito privado, com sede em..., inscrita no CNPJ sob o n.º...; e
Nome Pessoa Física, nacionalidade, estado civil, profissão, CPF e endereço;
pelos fundamentos de fato e de direito a seguir expostos:
DA COMPETÊNCIA A competência para processar e julgar a presente demanda é da Vara da Fazenda Pública, quando o polo passivo é ocupado por entes públicos. A competência para processar e julgar a presente demanda é da Vara da Infância e Juventude, quando envoltos interesses de crianças e adolescentes, nos termos do art. 148, inciso ___, da Lei n.º 8.069/1990. Quanto à competência territorial, aplica-se o foro do local do dano (art. 2.º da Lei n.º 7.347/1985 e art. 93, I, do CDC) ou, conforme o caso, o foro do domicílio da pessoa idosa (art. 80 do Estatuto da Pessoa Idosa).


DA LEGITIMIDADE ATIVA E PASSIVA Na defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis (art. 127, "caput", da CF), em especial na tutela do patrimônio público / do patrimônio histórico / do meio ambiente / da saúde / do consumidor / da educação / de criança e adolescente / do idoso / da pessoa com deficiência..., o Ministério Público é legitimado ativo para ajuizar ação civil pública (arts. 1.º e 5.º, I, da Lei n.º 7.347/1985 e demais legislações específicas aplicáveis), justificando sua atuação para a garantia dos direitos fundamentais violados no caso concreto. No que se refere à legitimidade passiva, a demanda se dirige contra [Nome do Réu], por ser ele o responsável direto pelos atos e/ou omissões narrados, subsumindo-se ao conceito de responsável (art. 3.º da Lei n.º 7.347/1985).


DOS FATOS Nos termos dos autos do Inquérito Civil n.º XXX, instaurado pela Promotoria de Justiça de XXX, apurou-se a ocorrência de [descrição sucinta do fato lesivo], praticado por [nome do Réu], que vem causando prejuízos ou ameaça a bens ou interesses protegidos...


DOS FUNDAMENTOS JURÍDICOS O direito invocado tem fundamento no artigo [citar dispositivos constitucionais, legais e jurisprudência aplicáveis], o qual estabelece que... Dessa forma, resta caracterizada a conduta ilícita por parte do Réu. No presente caso, também deve ser deferida a inversão do ônus da prova, não só pela verossimilhança das alegações e hipossuficiência técnica e probatória dos afetados, mas especialmente em decorrência da própria finalidade do processo coletivo, nos termos dos arts. 6.º, VIII, do CDC, 21 da Lei n.º 7.347/1985 e 373, §1.º, do CPC. O entendimento é corroborado pela Súmula n.º 618 do STJ, que admite expressamente a inversão do ônus da prova em ações coletivas que versem sobre degradação ambiental, entendimento que deve ser estendido às demais ações de tutela coletiva de direitos fundamentais.


DA DECLARAÇÃO INCIDENTAL DE INCONSTITUCIONALIDADE A lei ... padece de vício de inconstitucionalidade. Sendo o controle difuso de constitucionalidade possível em sede de ação civil pública, requer seja declarada, incidenter tantum, a inconstitucionalidade da mencionada norma.


DOS PEDIDOS Ante o exposto, o Ministério Público requer: a) o recebimento, autuação e processamento da ACP, adotando procedimento comum com observância do microssistema coletivo (arts. 21 da Lei n.º 7.347/1985 e 90 do CDC); b) a concessão da tutela provisória de urgência sem a oitiva da parte contrária (arts. 297 e 300, do CPC; 11 e 12, da Lei n.º 7.347/1985; 84, §3º, CDC; e art. 213, §1.º, ECA; art. 83, §1.º, Estatuto da Pessoa Idosa), sob pena de multa diária de R$... com destinação ao Fundo de Reconstituição dos Bens Lesados (FRBL) (arts. 13 da Lei n.º 7.347/1985; art. 84, §4º, do CDC; 213, §2º e 214, do ECA; 82, §2º e 84 da Lei n.º 10.741/2003), ou mesmo o bloqueio das verbas públicas em montante necessário à satisfação da obrigação por meio do Sisbajud (arts. 297 e 497 do CPC) para...; c) a citação dos requeridos para que apresentem resposta no prazo legal, advertindo-os sobre os efeitos da revelia (arts. 335; 344; 242, §3º, do CPC); d) a intimação do representante judicial / procurador-geral da pessoa jurídica de direito público interessada para intervir na demanda, querendo (art. 5.º, §2º, da Lei n.º 7.347/1985; art. 75, do CPC); e) a dispensa da designação de audiência de conciliação ou mediação (art. 319, VII, e art. 334, §4º, II, do CPC); f) a publicação de edital no órgão oficial, a fim de que os interessados possam intervir no processo como litisconsortes, sem prejuízo de ampla divulgação pelos meios de comunicação social por parte dos réus (art. 94 do CDC); g) a inversão do ônus da prova em favor da coletividade substituída, com amparo no art. 6.º, VIII, do CDC e 373, §1º, do CPC (e art. 21 da Lei n.º 7.347/1985; e Súmula 618 do STJ, quando ambiental); h) ao final, a procedência integral dos pedidos, confirmando a tutela provisória, a fim de determinar: (A) Quanto ao Réu FULANO: (B) Quanto ao Réu CICLANO: (C) Quanto aos Réus FULANO E CICLANO: a obrigação de obrigação de fazer / não fazer (art. 3º da Lei n.º 7.347/1985) consistente na... no prazo de...; a obrigação de ressarcir integralmente os danos (art. 3º da Lei n.º 7.347/1985) consistente em...; a condenação ao pagamento de danos morais coletivos ao ______ no valor de R$... a ser revertido ao FRBL (arts. 13 da Lei n.º 7.347/1985; art. 84, §4º, do CDC; 213, §2º e 214, do ECA; 82, §2º e 84 da Lei n.º 10.741/2003), (D) a inclusão no projeto de lei orçamentária anual de dotação orçamentária necessária e suficiente para garantir o direito (arts. 4.º, 6.º, e 60 da Lei n.º 4.320/1964); [em caso de política pública] i) seja fixada multa cominatória diária de R$..., por dia de atraso em caso de descumprimento da decisão, com destinação ao FRBL (arts. 13 da Lei n.º 7.347/1985; art. 84, §4º, do CDC; 213, §2º e 214, do ECA; 82, §2º e 84 da Lei n.º 10.741/2003); h) seja declarada, incidentalmente, a inconstitucionalidade material/formal do art. ___ da Lei___; i) a isenção de custas e emolumentos (arts. 87 e 91, do CPC; e 18 da Lei n.º 7.347/1985); e a condenação do Requerido nas custas e emolumentos (arts. 81 e ss. do CPC). j) a produção de todos os meios de prova em direito admitidos (art. 319, VI, 357, §5º, art. 369, 450, do CPC), em especial...; k) a prioridade de tramitação (fundamento legal);


Dá-se à causa o valor de R$... (arts. 291 e 319, V, do CPC).
Local, data. Promotor de Justiça`
  },
  {
    id: "civel-5",
    category: "Cível",
    title: "5. Ação por Improbidade Administrativa",
    content: `EXCELENTÍSSIMO SENHOR JUIZ DE DIREITO DA... VARA... DA COMARCA DE..., NO ESTADO DE... ou AO JUÍZO DA... VARA... DA COMARCA DE..., NO ESTADO DE...
O Ministério Público do Estado de Santa Catarina, por intermédio do Promotor de Justiça em exercício nesta Promotoria, nos termos dos arts. 127 e 129, inciso III, da Constituição Federal; art. 25, inciso IV, da Lei n.º 8.625/1993; art... da Lei Complementar Estadual n.º... [Lei Orgânica do MPE]; art. 17 e ss. da Lei n.º 8.429/1992; outros; e o art. 319 do Código de Processo Civil (CPC), vem, respeitosamente, à presença de Vossa Excelência, propor AÇÃO CIVIL PÚBLICA DE RESPONSABILIZAÇÃO POR ATOS DE IMPROBIDADE ADMINISTRATIVA em face de:
Estado de ..., pessoa jurídica de direito público interno, representado por seu Procurador-Geral (art. 75, II, do CPC);
Município de ..., pessoa jurídica de direito público interno, representado por seu Prefeito ou Procurador Municipal (art. 75, III, do CPC);
Nome Pessoa Jurídica, pessoa jurídica de direito privado, com sede em..., inscrita no CNPJ sob o n.º...; e
Nome Pessoa Física, nacionalidade, estado civil, profissão, CPF e endereço;
pelos fundamentos de fato e de direito a seguir expostos:
DA COMPETÊNCIA DO JUÍZO A competência para processar e julgar a presente demanda é da Vara da Fazenda Pública, ou Vara da comarca correspondente, de acordo com as regras de organização judiciária local. Dessa forma, sendo o dano verificado no município de ______, a competência é da comarca de ______, por ser o local onde efetivamente ocorreu a lesão ao erário. OU De igual modo, tratando-se de prejuízo suportado pelo Estado de _______, a competência territorial é da comarca da Capital, onde se encontra a sede do ente público estadual lesado. Cumpre destacar que, de acordo com a jurisprudência consolidada dos Tribunais Superiores, a presente ação civil pública, em regra, tramita na Justiça Estadual, exceto se houver manifesto interesse da União, empresa pública federal ou autarquia federal, atraindo a competência da Justiça Federal (Súmula 150 do STJ).


DA LEGITIMIDADE ATIVA E PASSIVA [Fundamentar a legitimidade ativa exclusiva do MP (art. 17 da LIA) e a legitimidade passiva do agente público ou do terceiro beneficiado (arts. 1º, 2º e 3º da LIA).]


DOS FATOS [Descrever os fatos de forma clara e objetiva com base no enunciado.]


DA INDIVIDUALIZAÇÃO DA CONDUTA (Art. 17, § 6º, I, da LIA) [Analisar as condutas do demandado, preenchendo os elementos: Dolo Específico, Violação da Norma, Tipo, Sanções correspondentes (Art. 12).]


DOS FUNDAMENTOS JURÍDICOS DA IMPROBIDADE [Articular as normas jurídicas aplicáveis: Constituição, Lei n.º 8.429/1992, princípios e jurisprudência pertinente, demonstrando o dano/enriquecimento e a exigência da demonstração do elemento volitivo (dolo) para responsabilização do agente.]


DO AFASTAMENTO PREVENTIVO DO AGENTE PÚBLICO NOME No caso em tela é patente a necessidade da concessão de tutela de urgência antecipada (arts. 17, 6.º-A e 20, §1.º, da Lei n.º 8.429/1992) para determinar o afastamento preventivo de NOME, sem prejuízo da remuneração, pelo prazo de até 90 dias, uma vez que a medida é necessária à instrução processual / para evitar a iminente prática de novos ilícitos.


DA INDISPONIBILIDADE DE BENS No caso em tela é patente a necessidade da concessão de tutela de urgência cautelar para o bloqueio e indisponibilidade de bens do demandado (arts. 16 e 17, §6.º-A, da Lei n.º 8.429/1992), no limite do dano ao erário ou do enriquecimento ilícito demonstrado. A tutela funda-se na demonstração, no caso concreto, de perigo de dano irreparável ou de risco ao resultado útil do processo.


DOS PEDIDOS Diante de todo o exposto, o Ministério Público requer: a) a concessão de tutela de urgência cautelar para decretar a indisponibilidade de bens no valor de R$...; b) ao final, julgado procedente o pedido com a condenação do(s) Requerido(s) NOME pela prática do ato de improbidade do art. 9.º/10/11, com aplicação das penas do art. 12, inciso I/II/III, da Lei n.º 8.429/1992; e do Requerido PESSOA JURÍDICA pela prática do ato tipificado no art. 5.º, inciso..., da Lei n.º 12.846/2013, com a aplicação das sanções do art. 19 da Lei n.º 12.846/2013; bem como ao ressarcimento integral do dano...; c) a citação do Requerido para, querendo, contestar a presente ação (art. 17, §7º, da LIA); d) a oitiva do ente público prejudicado (art. 17, §14, da LIA); e) a suspensão dos direitos políticos, com comunicação posterior à Justiça Eleitoral e aos demais órgãos pertinentes para os devidos fins de inabilitação perante...; f) a isenção de custas e emolumentos (art. 18 da Lei n.º 7.347/1985); e a condenação do Requerido nas custas e emolumentos (arts. 81 e ss. do CPC); g) pugna pela produção de todos os meios de prova em direito admitidos.


Dá-se à causa o valor de R$...
Local, data. Promotor de Justiça`
  },
  {
    id: "civel-6",
    category: "Cível",
    title: "6. Petição Inicial",
    content: `EXCELENTÍSSIMO SENHOR JUIZ DE DIREITO DA... VARA... DA COMARCA DE..., NO ESTADO DE... ou AO JUÍZO DA... VARA... DA COMARCA DE..., NO ESTADO DE...
O MINISTÉRIO PÚBLICO DE ESTADO DE SANTA CATARINA, pelo Promotor de Justiça em exercício nesta Promotoria, nos termos dos arts. 127 e 129, ..., da Constituição Federal (CF); art. ... da Lei n.º 8.625/1993; art... da Lei Complementar Estadual n.º... [Lei Orgânica do MPE]; outros e o art. 319 do Código de Processo Civil (CPC), vem, respeitosamente, à presença de Vossa Excelência, propor a presente AÇÃO ... em face de:
Estado de ..., pessoa jurídica de direito público interno, representado por seu Procurador-Geral (art. 75, II, do CPC);
Município de ..., pessoa jurídica de direito público interno, representado por seu Prefeito ou Procurador Municipal (art. 75, III, do CPC);
Nome Pessoa Jurídica, pessoa jurídica de direito privado, com sede em..., inscrita no CNPJ sob o n.º...; e
Nome Pessoa Física, nacionalidade, estado civil, profissão, CPF e endereço;
pelos fundamentos de fato e de direito a seguir expostos:
DA COMPETÊNCIA DO JUÍZO O juízo da Comarca (...) é competente para o ajuizamento da presente ação nos termos do art..., porquanto (...)


DA LEGITIMIDADE ATIVA E PASSIVA Na defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis (art. 127, "caput", da CF), em especial na tutela do patrimônio público / do patrimônio histórico / do meio ambiente / da saúde / do consumidor / da educação / de criança e adolescente / do idoso / da pessoa com deficiência..., o Ministério Público é legitimado ativo para ajuizar ação civil pública (arts. 1.º e 5.º, I, da Lei n.º 7.347/1985 e demais legislações específicas aplicáveis) ou a respectiva ação cível prevista. Por sua vez, o(s) Réu(s) possui(em) pertinência subjetiva com a lide em razão de...


DOS FATOS [Narrativa fática objetiva e clara, abordando os elementos do enunciado.]


DOS FUNDAMENTOS JURÍDICOS [Apresentação da subsunção dos fatos às normas legais, com amparo em doutrina e jurisprudência.]


DA TUTELA DE URGÊNCIA ANTECIPADA No caso em tela é patente a necessidade da concessão de tutela provisória de urgência antecipada (arts. 300 e 297 do CPC). A urgência pode ser traduzida na premente necessidade de... Por sua vez, a probabilidade do direito se baseia na violação ao artigo.... Cabe ponderar também a reversibilidade da medida (art. 300, §3.º, do CPC), visto que ... / Cabe ponderar também, não obstante a irreversibilidade dos efeitos da medida (art. 300, §3.º, do CPC), que não deve ser impedida a sua concessão com base na garantia do acesso à justiça (art. 5º, XXXV, CF) e em virtude de... Portanto, requer-se a...


DA TUTELA CAUTELAR No caso em tela é patente a necessidade da concessão de tutela provisória de urgência cautelar (arts. 300 e 301 do CPC). A urgência pode ser traduzida na premente necessidade de... Por sua vez, a probabilidade do direito se baseia na afronta ao artigo.... Portanto, requer-se a...
DA TUTELA DE EVIDÊNCIA No caso em tela é patente a necessidade da concessão de tutela de evidência com fulcro no art. 311 do CPC, visto que [apresentar o fundamento legal e fático]. Portanto, requer-se a...
DOS PEDIDOS Ante o exposto, requer o Ministério Público: a) o recebimento, autuação e processamento da petição inicial (art. 319 do CPC); b) a concessão da tutela provisória (antecipada, cautelar ou evidência), nos termos fundamentados... c) a citação dos requeridos (arts. 238 e seguintes do CPC); d) a intimação do representante judicial / procurador-geral da pessoa jurídica de direito público interessada para intervir na demanda, querendo; e) ao final, julgar totalmente procedentes os pedidos para [descrever o pedido de mérito]... f) a isenção de custas (se for o caso) ou pagamento de custas; g) a condenação do Requerido nas custas e emolumentos (arts. 81 e ss. do CPC). h) pugna pela produção de todos os meios de prova em direito admitidos. i) a prioridade de tramitação (fundamento legal);
Dá-se à causa o valor de R$...
Local, data. Promotor de Justiça`
  },
  {
    id: "civel-7",
    category: "Cível",
    title: "7. Parecer",
    content: `EXCELENTÍSSIMO SENHOR JUIZ DE DIREITO DA... VARA... DA COMARCA DE..., NO ESTADO DE... ou AO JUÍZO DA... VARA... DA COMARCA DE..., NO ESTADO DE...
Autos n.º (...) Demandante: (...) Demandado: (...) Objeto da ação: (...)
O Ministério Público do Estado de Santa Catarina, por meio do Promotor de Justiça que esta subscreve, no exercício de suas atribuições legais, com fundamento nos arts. 127 e 129, inciso ..., da Constituição Federal; art. 25, inciso V, da Lei n.º 8.625/1993; art. ... da Lei Complementar Estadual n.º ... [Lei Orgânica do MP]; art. 178, inciso ..., do Código de Processo Civil (CPC); outros, vem, respeitosamente, à presença de Vossa Excelência, apresentar PARECER MINISTERIAL nos presentes autos, promovidos por (...), em face de (...), pelos fundamentos a seguir expostos.
RELATÓRIO Trata-se de [especificar o tipo de ação: ação civil pública, mandado de segurança, ação popular etc.], ajuizada por (...), em face de (...), tendo como objeto [resumir o pedido principal de forma objetiva]. Foram praticados os atos processuais (...), vindo os autos ao Ministério Público para manifestação na qualidade de fiscal da ordem jurídica. É o breve relatório. Passa-se à manifestação.


DA ATUAÇÃO COMO FISCAL DA ORDEM JURÍDICA Na defesa da ordem jurídica, do regime democrático, dos interesses sociais e individuais indisponíveis (art. 127, "caput", da CF), em especial na tutela do patrimônio público / do patrimônio histórico / do meio ambiente / da saúde / do consumidor / da educação / de criança e adolescente / do idoso / da pessoa com deficiência..., o Ministério Público possui atribuição para atuar na qualidade de fiscal da ordem jurídica, conforme disposição dos arts. 178, ... do CPC.


DAS PRELIMINARES E PREJUDICIAIS DE MÉRITO Antes de adentrar ao mérito, é imperiosa a análise da preliminar de (...), arguida pela parte (...). [Apresentar os fundamentos de direito e jurisprudenciais pertinentes]. Dessa forma, opina-se pelo acolhimento / rejeição da referida preliminar. [indicação expressa de acolhimento ou rejeição.] Não havendo outras questões de ordem processual relevantes, passa-se à análise do mérito.


DO MÉRITO [Neste ponto, deve-se apresentar a análise das provas constantes dos autos, confrontadas com os fundamentos jurídicos aplicáveis, incluindo normas constitucionais, legais, precedentes jurisprudenciais e doutrina.]


CONCLUSÃO Diante do exposto, o Ministério Público manifesta-se: pelo (não) acolhimento da preliminar de (...); e pela procedência / improcedência / procedência parcial do pedido formulado por (...), nos termos acima fundamentados.


É o parecer.
Local, data. Promotor de Justiça`
  },
  {
    id: "civel-8",
    category: "Cível",
    title: "8. Agravo de Instrumento",
    content: `EXCELENTÍSSIMO SENHOR DESEMBARGADOR PRESIDENTE DO EGRÉGIO TRIBUNAL DE JUSTIÇA DO ESTADO DE (...)
Autos n.º...
O Ministério Público do Estado de Santa Catarina, por intermédio do Promotor de Justiça em exercício nesta Promotoria, nos termos dos arts. 127 e 129, inciso ..., da Constituição Federal; art. ... da Lei n.º 8.625/1993; art. ... da Lei Complementar Estadual n.º ... [Lei Orgânica do MP]; arts. 1.015 e seguintes do Código de Processo Civil (CPC); outros, vem, respeitosamente, à presença de Vossa Excelência, interpor AGRAVO DE INSTRUMENTO [COM PEDIDO DE EFEITO SUSPENSIVO], contra decisão interlocutória proferida nos autos da demanda ajuizada por (...) em face de (...), pelos fundamentos jurídicos a seguir expostos.
Nos termos do art. 1.016, inciso IV, do CPC, informa-se o nome e endereço completos dos advogados constantes do processo. Anexam-se as peças obrigatórias (art. 1.017 do CPC). Apresentam-se, desde logo, as razões do presente recurso, requerendo-se seu recebimento, conhecimento e provimento.
Local, data. Promotor de Justiça
RAZÕES RECURSAIS
Autos n.º ... AGRAVANTE: Ministério Público do Estado de Santa Catarina AGRAVADO: ...
Egrégio Tribunal, Colenda Câmara, Douto Procurador de Justiça,
DOS FATOS E DO RECURSO [Breve síntese dos fatos que geraram a lide, o que foi decidido pelo magistrado a quo e por que a decisão deve ser reformada].


DOS PRESSUPOSTOS DE ADMISSIBILIDADE O recurso é tempestivo, não estando o Ministério Público sujeito a preparo (arts. 1.007, § 1.º e 1.017, § 1.º, do CPC), além de ser cabível (art. 1.015, inciso..., do CPC) e adequado. Possui o Ministério Público legitimidade recursal e interesse, nos arts. 179, II, e 996 do CPC, sendo reconhecida a possibilidade de interposição de recurso mesmo sem provocação da parte, conforme entendimento consagrado na Súmula 601/STJ. Diante do preenchimento dos requisitos legais, requer-se o conhecimento do presente recurso.


DO MÉRITO [Apresentar a fundamentação jurídica da irresignação, com base em dispositivos legais, doutrina e jurisprudência. Explique por que a decisão recorrida deve ser reformada/anulada].


DA TUTELA ANTECIPADA RECURSAL / DO EFEITO SUSPENSIVO Nos termos do art. 1.019, inciso I, do CPC, o Relator poderá conceder efeito suspensivo ou antecipar os efeitos da tutela em sede recursal. No caso concreto, a fumaça do bom direito (fumus boni iuris) se comprova pela [motivação]. O perigo na demora (periculum in mora), por sua vez, está demonstrado porque [motivação].


DOS PEDIDOS Ante o exposto, o Ministério Público requer: a) O recebimento e conhecimento do presente recurso; b) A concessão de tutela provisória de urgência, nos termos do art. 300 e 1.019, I, do CPC; c) A atribuição de efeito suspensivo à decisão recorrida (art. 995, parágrafo único, do CPC); d) A intimação do agravado para apresentar contrarrazões no prazo legal de 15 (quinze) dias (art. 1.019, II, do CPC); e) Ao final, o provimento do recurso, com a consequente reforma/nulidade da decisão agravada; f) A condenação do Recorrente em custas e emolumentos (arts. 81 e ss. do CPC).


Local, data. Promotor de Justiça`
  },
  {
    id: "civel-9",
    category: "Cível",
    title: "9. Apelação",
    content: `EXCELENTÍSSIMO SENHOR JUIZ DE DIREITO DA... VARA... DA COMARCA DE..., NO ESTADO DE... ou AO JUÍZO DA... VARA... DA COMARCA DE..., NO ESTADO DE...
Autos n.º...
O Ministério Público do Estado de Santa Catarina, por intermédio do Promotor de Justiça em exercício nesta Promotoria, nos termos dos arts. 127 e 129, inciso ..., da Constituição Federal; art. ... da Lei n.º 8.625/1993; art. ... da Lei Complementar Estadual n.º ... [Lei Orgânica do MP]; arts. 1.009 e seguintes do Código de Processo Civil (CPC); outros, vem, respeitosamente, à presença de Vossa Excelência, interpor APELAÇÃO contra sentença proferida nos autos da demanda ajuizada por (...) em face de (...), pelos fundamentos jurídicos a seguir expostos.
Requer seja observada a oportunidade de retratação (art... do CPC) e, caso mantida a decisão, seja intimada a parte contrária para apresentação de contrarrazões no prazo de 15 dias (art. 1.010, §1.º, do CPC); sendo, em seguida, encaminhado o recurso ao Tribunal "ad quem", a quem compete o juízo único de admissibilidade (art. 1.010, §3.º, do CPC).
Local, data. Promotor de Justiça
RAZÕES RECURSAIS
Autos n.º ... APELANTE: Ministério Público do Estado de Santa Catarina APELADO: ...
Egrégio Tribunal, Colenda Câmara, Douto Procurador de Justiça,
DOS FATOS E DO RECURSO [Breve síntese dos fatos que geraram a lide, o que foi decidido pelo magistrado a quo na sentença e por que a decisão deve ser reformada].


DOS PRESSUPOSTOS DE ADMISSIBILIDADE O recurso é tempestivo, não estando o Ministério Público sujeito a preparo (arts. 1.007, § 1.º e 1.017, § 1.º, do CPC), além de ser cabível (art. 1.009 do CPC) e adequado. Possui o Ministério Público legitimidade recursal e interesse, nos arts. 179, II, e 996 do CPC, sendo reconhecida a possibilidade de interposição de recurso mesmo sem provocação da parte, conforme entendimento consagrado na Súmula 601/STJ. Diante do preenchimento dos requisitos legais, requer-se o conhecimento do presente recurso.


DAS PREJUDICIAS E PRELIMINARES DE MÉRITO (...) Superadas as preliminares eventualmente arguidas, passa-se, então, à análise do mérito propriamente dito.


DO MÉRITO [Apresentar a fundamentação jurídica da irresignação, com base em dispositivos legais, doutrina e jurisprudência. Explique por que a decisão recorrida deve ser reformada/anulada].


DOS PEDIDOS Ante o exposto, o Ministério Público requer: a) O recebimento e conhecimento do presente recurso; b) O acolhimento da preliminar / prejudicial de mérito arguida para o fim de...; c) No mérito, o provimento do recurso, com a consequente reforma/nulidade da decisão recorrida, determinando-se...; d) A aplicação da Teoria da Causa Madura, com o julgamento imediato da lide, com a consequente reforma da sentença, julgando procedente o pedido (art. 1.013, §1.º, inciso..., do CPC) [caso aplicável a teoria da causa madura]; e) A suspensão dos efeitos da decisão (art. 1.012 do CPC); f) A condenação do Recorrente em custas e emolumentos (arts. 81 e ss. do CPC).


Local, data. Promotor de Justiça`
  },
  {
    id: "civel-10",
    category: "Cível",
    title: "10. Contrarrazões",
    content: `EXCELENTÍSSIMO SENHOR JUIZ DE DIREITO DA... VARA... DA COMARCA DE..., NO ESTADO DE... [se APELAÇÃO] EXCELENTÍSSIMO SENHOR DESEMBARGADOR PRESIDENTE DO EGRÉGIO TRIBUNAL DE JUSTIÇA DO ESTADO DE (...) [se AGRAVO]
CONTRARRAZÕES RECURSAIS
Autos n.º ... RECORRENTE / APELANTE: RECORRIDO / APELADO:
Egrégio Tribunal, Colenda Câmara, Douto Procurador de Justiça,
DOS FATOS E DO RECURSO [Apresentar um breve relato processual destacando os motivos do recurso interposto pela parte adversa.]


DOS PRESSUPOSTOS DE ADMISSIBILIDADE RECURSAL [Indicar a ausência de pressupostos, como intempestividade, ilegitimidade, deserção etc. Se não houver problemas de admissibilidade, ir direto para as prejudiciais/preliminares].


DAS PREJUDICIAIS E PRELIMINARES DE MÉRITO [Apontar as falhas processuais que impedem a análise do mérito, se houver.]


DO MÉRITO [Apresentar a fundamentação jurídica, com base em dispositivos legais, doutrina e jurisprudência.]


DOS PEDIDOS [caso a atuação seja como autor] Ante o exposto, requer o Ministério Público: (a) o conhecimento / não conhecimento do recurso apresentado; (b) o acolhimento / não acolhimento da preliminar ou prejudicial de mérito em virtude de (...); (c) no mérito, seja improvido o recurso da Recorrente, mantendo-se incólume a sentença / decisão agravada; (d) a condenação da parte Recorrente nas custas processuais.


DA CONCLUSÃO [caso a atuação seja como fiscal da ordem jurídica] Ante o exposto, opina o Ministério Público: a) o conhecimento / não conhecimento do recurso apresentado; b) o acolhimento / não acolhimento da preliminar ou prejudicial de mérito em virtude de (...); c) no mérito, seja provido / provido parcialmente / improvido o recurso do Recorrente, mantendo-se incólume a sentença / determinando-se a reforma ou nulidade da sentença para...; proferindo-se, desde logo, nova decisão de mérito (art. 1.013, §1.º, inciso..., do CPC) [caso aplicável a teoria da causa madura]; d) no mérito, seja provido o presente recurso, determinando a reforma ou nulidade da sentença para...; proferindo-se, desde logo, nova decisão de mérito (art. 1.013, §1.º, inciso..., do CPC) [caso aplicável a teoria da causa madura]; e) a condenação do Recorrente em custas e emolumentos (arts. 81 e ss. do CPC).


Local, data. Promotor de Justiça`
  },

  // ---------------------------------------------------------
  // SEÇÃO: TEORIA - CRIME (10 Documentos)
  // ---------------------------------------------------------
  {
    id: "teoria-crime-1",
    category: "Teoria - Crime",
    title: "1. Acordo de Não Persecução Penal (ANPP)",
    content: `Natureza e Finalidade: É um negócio jurídico pré-processual focado na despenalização. Evita a instauração do processo-crime para infrações de média gravidade, extinguindo a punibilidade se cumprido integralmente.

Requisitos Cumulativos (Art. 28-A, CPP): Não ser caso de arquivamento; existir confissão formal e circunstanciada; o crime não envolver violência ou grave ameaça; e a pena mínima cominada ser inferior a 4 anos (considerando causas de aumento e diminuição).

Vedações: É incabível se couber transação penal, se o réu for reincidente ou tiver conduta criminal habitual, se já foi beneficiado por ANPP, transação ou suspensão condicional nos últimos 5 anos, e em crimes de violência doméstica contra a mulher ou racismo.

Direito Intertemporal (Tema 1.098 STJ): Possui natureza híbrida (material e processual), permitindo retroatividade benéfica. Aplica-se a processos em curso iniciados até 18/09/2024, desde que não haja trânsito em julgado. Para ações iniciadas após essa data, deve ser oferecido antes do recebimento da denúncia.`
  },
  {
    id: "teoria-crime-2",
    category: "Teoria - Crime",
    title: "2. Ação Penal e Denúncia (Ritos Comum e do Júri)",
    content: `Fundamento e Princípios: O Ministério Público é o titular exclusivo da ação penal pública (art. 129, I, da CF), pautando-se pelo princípio da obrigatoriedade.

Condições da Ação: Exige-se a Justa Causa (prova da materialidade e indícios suficientes de autoria); Legitimidade ativa (MP) e passiva; Interesse de Agir (utilidade e necessidade, que não existe se a punibilidade estiver extinta); e Possibilidade Jurídica do Pedido (o fato deve ser típico).

Peculiaridades no Rito do Júri: A competência material é restrita aos crimes dolosos contra a vida (homicídio, feminicídio, infanticídio, aborto, induzimento ao suicídio) e os conexos. Exige uma narrativa fática exauriente das qualificadoras (motivo, meio, modo de execução) e causas de aumento, pois a denúncia servirá de limite para a decisão de pronúncia. Atrai crimes conexos (art. 78, I, CPP).`
  },
  {
    id: "teoria-crime-3",
    category: "Teoria - Crime",
    title: "3. Cota Ministerial",
    content: `Natureza: Não é uma peça processual autônoma, mas uma manifestação acessória que acompanha a denúncia para impulsionar o processo.

Funcionalidade: Serve para organizar o início do processo, solicitando medidas como juntada de antecedentes criminais, decretação de prisões ou cautelares, arquivamentos parciais, destinação de armas/drogas, entre outras.`
  },
  {
    id: "teoria-crime-4",
    category: "Teoria - Crime",
    title: "4. Alegações Finais por Memoriais Escritos",
    content: `No Rito Comum: São o último ato antes da sentença. A regra processual é a oralidade (art. 403, caput, do CPP), mas a apresentação escrita (memoriais) é admitida em casos complexos, com muitos acusados, ou após diligências complementares (art. 404, p.u., CPP). O foco é a demonstração robusta da autoria e materialidade para condenação, debatendo a dosimetria da pena e a fixação de valor mínimo de reparação.

No Rito do Júri (Fase da Pronúncia): Ocorre no judicium accusationis. O objetivo não é condenar, mas convencer o juiz togado a pronunciar o réu (enviá-lo ao Conselho de Sentença). Exige-se prova da materialidade e indícios suficientes de autoria (art. 413 do CPP), não sendo necessária certeza absoluta. Observação teórica crítica do manual: o princípio do in dubio pro societate como justificativa cega tem sido rejeitado atualmente pela jurisprudência superior, devendo ser evitado como tese jurídica na prova. As qualificadoras só podem ser afastadas se manifestamente improcedentes.`
  },
  {
    id: "teoria-crime-5",
    category: "Teoria - Crime",
    title: "5. Teoria Geral dos Recursos e Interposição",
    content: `Pressupostos Objetivos: Cabimento, adequação, tempestividade (prazos contínuos e peremptórios; Súmula 710 STF), regularidade formal e inexistência de fato impeditivo (ex: renúncia) ou extintivo (ex: desistência, morte). O STJ admite a fungibilidade recursal (Tema 1.219) se os prazos e pressupostos forem atendidos.

Pressupostos Subjetivos: Legitimidade (incluindo o MP como custos legis, podendo recorrer em favor do réu) e interesse recursal (sucumbência, que para o MP é a incorreta aplicação da lei).

Efeitos Recursais: Devolutivo (devolve a matéria); suspensivo (impede a eficácia imediata); regressivo/iterativo (permite ao juiz se retratar); extensivo (aproveita a corréus se as razões não forem pessoais); e translativo (autoriza o tribunal a apreciar matérias de ordem pública não requeridas expressamente).

Sistema Bifásico: Envolve a Petição de Interposição (simples, com o fito de garantir o prazo e afastar a preclusão) e as Razões Recursais (a argumentação de mérito em si).`
  },
  {
    id: "teoria-crime-6",
    category: "Teoria - Crime",
    title: "6. Apelação",
    content: `Teoria: Recurso ordinário amplo contra sentenças (absolutórias ou condenatórias). O Ministério Público pode apelar para: buscar a condenação, exasperar pena-base, reconhecer agravantes, aplicar regime prisional mais severo ou corrigir a classificação jurídica.

Regra da Subsidiariedade (Art. 593, §4º, CPP): Se uma sentença contiver matérias que seriam recorríveis por Recurso em Sentido Estrito (ex: juiz condena por um crime, mas declara extinta a punibilidade de outro na mesma sentença), a Apelação absorve toda a matéria. Não se usa RESE contra partes de uma sentença.`
  },
  {
    id: "teoria-crime-7",
    category: "Teoria - Crime",
    title: "7. Recurso em Sentido Estrito (RESE)",
    content: `Teoria: Recurso "cirúrgico" voltado a decisões interlocutórias estritas (art. 581 do CPP). Hipóteses principais: contra rejeição de denúncia, incompetência do juízo, extinção da punibilidade e recusa de homologação de ANPP.

Dinâmicas Exclusivas:

Juízo de Retratação (efeito regressivo): As razões são inicialmente destinadas ao juiz que proferiu a decisão para que ele mesmo a reforme (art. 589 do CPP).

Formação por Instrumento: O recurso sobe em autos apartados (traslado) contendo cópias das peças vitais (art. 583 do CPP), evitando a paralisação do processo principal.

Contraditório (Súmula 707 do STF): Nos casos de rejeição de denúncia, o investigado deve ser preferencialmente intimado de forma pessoal para oferecer contrarrazões ao RESE.`
  },
  {
    id: "teoria-crime-8",
    category: "Teoria - Crime",
    title: "8. Agravo em Execução Penal",
    content: `Teoria: Recurso exclusivo contra decisões do Juiz da Execução Penal (art. 197 da LEP). Por construção jurisprudencial, adota integralmente o rito do RESE (interposição em duas fases e juízo de retratação).

Cabimento Material: Combate deferimentos indevidos de progressão de regime, livramento condicional, indulto/comutação, cálculo errôneo de pena e, notadamente, recursos referentes a faltas graves. As súmulas 533 (necessidade de PAD) e 534 (falta grave interrompe prazo para progressão) do STJ pautam fortemente este tema.`
  },
  {
    id: "teoria-crime-9",
    category: "Teoria - Crime",
    title: "9. Teoria das Contrarrazões Recursais",
    content: `Natureza: Refletem o princípio do contraditório na esfera recursal. A parte recorrida defende a decisão judicial que lhe foi favorável.

Atuação Estratégica Dupla: O MP, como recorrido, atua primeiro analisando a admissibilidade (suscitando intempestividade, inadequação, etc.). Superadas as preliminares, rebate o mérito das razões defensivas, ponto por ponto, pugnando pela manutenção do julgado (seja de condenação na Apelação, seja de uma pronúncia no RESE).`
  },
  {
    id: "teoria-crime-10",
    category: "Teoria - Crime",
    title: "10. Teoria Geral das Medidas Cautelares",
    content: `Natureza: Instrumentais, provisórias, proporcionais e subsidiárias. Exigem fumus comissi delicti (prova da materialidade e indícios de autoria) e periculum in mora (perigo na demora).

Prisão Preventiva (Cautelar Pessoal Extrema): Medida de ultima ratio. Demanda o art. 312 do CPP (garantia da ordem pública/econômica, conveniência da instrução criminal ou aplicação da lei penal) e o art. 313 do CPP (crimes dolosos com pena > 4 anos, reincidência, ou violência doméstica).

Cautelares Diversas (Art. 319 do CPP): Aplicam-se quando existe perigo, mas de menor intensidade que não justifique o encarceramento (ex: monitoramento eletrônico, proibição de contato).

Cautelares Reais (Patrimoniais):

Sequestro: Para bens adquiridos com os proventos/produtos da infração (bens ilícitos).

Hipoteca Legal: Grava bens imóveis lícitos do autor para garantir futura reparação do dano e custas.

Arresto: Grava bens móveis lícitos subsidiariamente para reparação.

Cautelares Probatórias (Busca e Apreensão): Quebram a inviolabilidade domiciliar com mandado judicial havendo "fundadas razões" para apreender armas, objetos de crime ou elementos de convicção ocultados (art. 240 do CPP).`
  },

  // ---------------------------------------------------------
  // SEÇÃO: TEORIA - CÍVEL (10 Documentos)
  // ---------------------------------------------------------
  {
    id: "teoria-civel-1",
    category: "Teoria - Cível",
    title: "1. Termo de Ajustamento de Conduta (TAC)",
    content: `Cabimento: O Compromisso de Ajustamento de Conduta é um acordo celebrado entre um dos legitimados e o investigado, sempre que as circunstâncias concretas assim o recomendarem. A celebração do compromisso não afasta, necessariamente, a eventual responsabilidade administrativa ou penal pelo mesmo fato, nem importa, automaticamente, no reconhecimento da responsabilidade para outros fins que não os estabelecidos expressamente no compromisso (art. 1.º, §3.º, da Resolução n.º 179/2017 do CNMP).

Identificação da Peça: Para identificar corretamente a necessidade de elaboração de um TAC, é fundamental atentar-se aos indícios fornecidos no enunciado.

Fundamentação Jurídica: O TAC exige uma atuação resolutiva, racional e estratégica das instituições ministeriais, priorizando soluções que evitem a judicialização excessiva e promovam resultados concretos à sociedade. Principais dispositivos que fundamentam o TAC:
- Art. 5.º, §6.º, da Lei n.º 7.347/1985;
- Resolução n.º 179/2017 do CNMP;
- Art. 211 do ECA (infância);
- Art. 79-A da Lei n.º 9.605/98 (ambiental);
- Art. 85 da Lei n.º 12.529/2011 (defesa da concorrência).

Estrutura da Peça:
- Estabelecimento de prazos para o cumprimento das obrigações assumidas.
- Previsão de sanção (como multa) em caso de descumprimento das cláusulas pactuadas.
- Demonstração da resolutividade e eficácia do acordo, tanto do ponto de vista jurídico quanto social.
- Previsão de participação social, por meio de pessoas ou entidades representativas.

A peça estrutura-se em:
- Cabeçalho: Identificação das partes (Compromitente e Compromissário) e a base legal de sua atribuição.
- Considerandos: Apresentação dos fundamentos legais e fáticos que justificam o acordo.
- Objeto: O que o acordo visa resolver.
- Obrigações: Conforme o art. 1.º, §1.º, da Resolução n.º 179/2017 do CNMP, deve o TAC especificar as obrigações adequadas e necessárias, em especial o modo, tempo e lugar de cumprimento. Ademais, devem elas serem certas, líquidas e exigíveis.
- Medidas Compensatórias: Visando à reparação dos danos decorrentes das condutas ajustadas, pode haver previsão de depósito em Fundo para Reconstituição de Bens Lesados.
- Comprovação e Inadimplemento: O compromissário deve comprovar o cumprimento, e o descumprimento ensejará imediata execução do TAC, que possui eficácia de título executivo extrajudicial.
- Eficácia: O TAC terá eficácia de título executivo extrajudicial, e entra em vigor na data de sua assinatura, submetido, via de regra, à homologação pelo órgão colegiado competente, como o Conselho Superior do Ministério Público.`
  },
  {
    id: "teoria-civel-2",
    category: "Teoria - Cível",
    title: "2. Recomendação Administrativa",
    content: `Cabimento: O cabimento da recomendação administrativa ocorre quando o Ministério Público, no exercício de sua função extrajudicial, visa dar ciência a determinado agente, público ou privado, sobre uma situação específica, sugerindo a adequação de sua conduta às normas legais e constitucionais, com a finalidade de tutelar interesses públicos, coletivos ou difusos.

Possui as seguintes características:
- É cognitiva, pois tem o efeito de dar ciência formal ao destinatário da situação irregular, com reflexos na responsabilização por eventual omissão.
- É unilateral, porque não impõe obrigação jurídica de cumprimento, sendo mero ato de recomendação.
- É preliminar, devendo ser utilizada, sempre que possível, como primeira tentativa de solução consensual antes da adoção de medidas mais gravosas, como o ajuizamento de ação.

Identificação da Peça: Por se tratar de ato da esfera administrativa, a questão fará menção a um procedimento extrajudicial, como inquérito civil, procedimento administrativo ou procedimento preparatório, o que serve de suporte formal à recomendação. Contudo, é fundamental observar que, em situações de urgência, a Resolução n.º 164/2017, do CNMP, em seu art. 3.º, §2.º, permite a expedição de recomendação independentemente de procedimento instaurado.

Fundamentação Jurídica: A fundamentação decorre da Constituição Federal, do art. 27, parágrafo único, IV, da Lei n.º 8.625/93, do art. 6.º, XX, da Lei Complementar n.º 75/93, além da Resolução n.º 164/2017 do CNMP. Há ainda previsão específica em legislação setorial, como o art. 201, inciso VIII, e §5.º, alínea "c", do ECA.

Estrutura da Peça: A recomendação administrativa não há forma predefinida, sendo bastante usual dos membros do Ministério Público o uso de "considerandos" para fazer a exposição narrativa e argumentativa. Dentre os elementos sugeridos pela Carta de Brasília, destacam-se:
- Apresentação dos devidos fundamentos constitucionais ou legais.
- Demonstração da utilidade social.
- Efetividade na fiscalização sobre o acatamento das recomendações.

A estrutura comumente dividida engloba:
- Cabeçalho: Indicação do título, numeração e número do procedimento.
- Considerandos: Critérios como fundamento da atuação do MP, finalidade, aspectos legais e fáticos apurados, e as consequências do descumprimento. O não acatamento da Recomendação ensejará a adoção das medidas cabíveis, em especial o ajuizamento de ação civil pública.`
  },
  {
    id: "teoria-civel-3",
    category: "Teoria - Cível",
    title: "3. Acordo de Não Persecução Cível (ANPC)",
    content: `Cabimento e Identificação: O ANPC encontra fundamento na Resolução CNMP n.º 306/2025. Possivelmente, o enunciado da questão indicará de forma expressa que o candidato deve celebrar, na condição de Promotor de Justiça, um ANPC.

Estrutura da Peça:
- Considerandos: São utilizados na prática como forma de contextualizar os fundamentos fáticos e jurídicos do acordo, sendo seu uso facultativo dependendo do estilo institucional. Devem abarcar os argumentos fáticos e jurídicos.
- Confissão / Reconhecimento da Conduta: É imprescindível indicar o inciso correspondente dentre os previstos nos artigos 9º, 10 e 11 da LIA para cada ato de improbidade. Há necessidade do expresso reconhecimento da responsabilidade pela prática do ato de improbidade. A Resolução CNMP nº 306/2025 não traz disposição expressa sobre a confissão, dependendo das normas de cada Ministério Público local.
- Oitiva do Ente Lesado: Um passo fundamental na formalização é garantir a oitiva do ente federativo prejudicado.
- Vantagem do Acordo: Deve ponderar a vantagem do acordo sob os critérios da eficiência, economicidade, razoabilidade e efetividade.
- Obrigações: O compromissário assume obrigações que podem englobar a reparação do dano patrimonial, devolução dos bens/valores acrescidos ilicitamente, pagamento de multa civil e, eventualmente, outras penalidades legais. A regra é a incidência de juros, mas a Resolução CNMP nº 306/2025 prevê a possibilidade de flexibilização para preservar a atuação resolutiva do Ministério Público.
- Convenções Processuais: Podem ser estabelecidas regras procedimentais com fundamento no art. 190 do CPC.
- Cumprimento: O valor deve retornar diretamente para a entidade lesada. Pode prever parcelamento do pagamento.
- Descumprimento: Acarretará o vencimento antecipado das parcelas e execução judicial, bem como retomada das investigações ou processos.
- Eficácia: Depende de homologação pelo órgão colegiado do MP (se extrajudicial) ou pelo juízo (se judicial).`
  },
  {
    id: "teoria-civel-4",
    category: "Teoria - Cível",
    title: "4. Ação Civil Pública (ACP)",
    content: `Cabimento: A Ação Civil Pública (ACP) constitui instrumento processual para a tutela de direitos difusos e coletivos. Cabível também para direitos individuais homogêneos, desde que possuam relevante interesse social, havendo limitação legal para pretensões de natureza tributária, contribuições previdenciárias e FGTS. O STF firmou tese de que o MP tem legitimidade em relação ao FGTS quando envolver interesses homogêneos de relevante interesse social (Tema 850), mas não tem para a matéria tributária (Tema 645 e Súmula 329 STJ). Além disso, a ACP presta-se para a tutela de direitos individuais indisponíveis. A Constituição (art. 127) confere ao MP a defesa dos interesses sociais e individuais indisponíveis, ampliando a legitimidade inclusive para garantias constitucionais voltadas a sujeitos vulneráveis.

Identificação da Peça: A petição inicial da ACP pode ser exigida quando o enunciado apontar expressamente para seu cabimento ou demandar a defesa do meio ambiente, patrimônio público, direitos do consumidor, saúde pública, proteção a idosos, entre outros.

Estrutura da Peça:
- Endereçamento: Juízo competente de primeiro grau, observando foro do local do dano (regra geral) e varas especializadas (Fazenda Pública, Infância, etc.).
- Cabeçalho: Qualificação do Ministério Público e dos réus.
- Legitimidade Ativa: Deve citar a Constituição Federal (arts. 127 e 129, III), a Lei Orgânica Nacional do MP (art. 25, IV, "a"), a Lei da Ação Civil Pública (arts. 1.º e 5.º, I) e normas setoriais específicas.
- Legitimidade Passiva: Aqueles responsáveis pela conduta, omissão ou fato que deu causa ao dano.
- Fundamentos Fáticos: Narrativa precisa das condutas (sem mera reprodução do enunciado) que causaram ameaça ou dano.
- Fundamentos Jurídicos: Subsunção dos fatos às normas legais e constitucionais, acompanhada da fundamentação jurisprudencial e doutrinária (microssistema da tutela coletiva).
- Inversão do Ônus da Prova: Pode ser baseada no CDC ou na Súmula 618 do STJ para casos ambientais.
- Declaração Incidental de Inconstitucionalidade: Controle difuso em sede de ACP.
- Tutela Provisória: Urgência ou cautelar baseada na probabilidade do direito e risco de dano.
- Pedidos e Valor da Causa: Obrigação de fazer/não fazer, ressarcimento, dano moral coletivo revertido ao Fundo de Reconstituição, isenção de custas, produção de provas, e indicação do valor genérico se a banca não fornecer dados concretos.`
  },
  {
    id: "teoria-civel-5",
    category: "Teoria - Cível",
    title: "5. Ação por Improbidade Administrativa (AIA)",
    content: `Cabimento e Identificação: Destina-se a responsabilizar agentes públicos ou terceiros por atos de improbidade administrativa, em geral quando há demonstração de violação aos princípios da Administração Pública ou dano ao erário.

Estrutura da Peça:
- Competência: O foro de domicílio é, em regra, o da comarca onde ocorreu a lesão. Tramita na Justiça Estadual, exceto se houver interesse manifesto da União ou suas autarquias (Súmula 150 do STJ). Não existe foro privilegiado para improbidade.
- Legitimidade Ativa: Exclusiva do Ministério Público, consoante o art. 17 da LIA, com base na CF e legislações orgânicas. A nova jurisprudência admite a aplicação conjunta da LIA e da Lei Anticorrupção (Lei 12.846/2013) na mesma ação, não havendo "bis in idem".
- Tempestividade / Prescrição: Aplica-se a Lei 14.230/2021 de forma irretroativa, valendo os prazos apenas para fatos após outubro de 2021.
- Individualização da Conduta e Dolo: É essencial individualizar a conduta de cada agente. O STF (Tema 1.199) e STJ exigem a comprovação de dolo específico e não se admite modalidade culposa. É obrigatório tipificar a conduta em apenas um dos incisos dos artigos 9º, 10 ou 11 da LIA.
- Sanções: Multa, suspensão de direitos políticos, ressarcimento. A sanção de suspensão dos direitos pode recair sobre os terceiros/particulares implicados.
- Afastamento Preventivo e Indisponibilidade: Requerimento de tutela de urgência para afastamento sem prejuízo da remuneração e para indisponibilidade de bens, a qual não exige mais o periculum in mora presumido (embora precise fundamentar).`
  },
  {
    id: "teoria-civel-6",
    category: "Teoria - Cível",
    title: "6. Petição Inicial",
    content: `Cabimento e Identificação: Adequada quando o Ministério Público atua como substituto processual ou na defesa de direitos indisponíveis não tuteláveis pela via da ACP (ex.: ação de alimentos para menor independentemente de risco, destituição de poder familiar, exclusão de herdeiro, extinção de fundação). Identifica-se a peça pela determinação no enunciado para "adotar providências judiciais" nestes temas específicos do Código Civil, Código de Processo Civil ou legislações correlatas.

Estrutura da Peça: Segue os requisitos do art. 319 do CPC.

- Endereçamento e Cabeçalho: Juízo competente e identificação do MP e da parte requerida.
- Competência: Fixada com base nas regras gerais do CPC e nas legislações especiais. Se houver vara especializada (ex: Infância), a competência é absoluta.
- Legitimidade Ativa e Passiva: O MP demonstra o vínculo da responsabilidade do requerido e de seu poder institucional de ação em nome da sociedade.
- Fatos e Direito: Narrativa sem reprodução literal do enunciado, conectada à fundamentação normativa (CF, ECA, Estatuto do Idoso) e à jurisprudência e doutrina.`
  },
  {
    id: "teoria-civel-7",
    category: "Teoria - Cível",
    title: "7. Parecer",
    content: `Cabimento e Identificação: Usado quando o MP atua como custos legis (fiscal da ordem jurídica) e não como autor. O enunciado costuma indicar a necessidade de elaborar uma "manifestação opinativa". Deve-se atentar se o parecer é interlocutório ou final, e se há restrições estipuladas pela banca.

Estrutura da Peça: A estrutura clássica é tripartida:

- Relatório: Apresentação sucinta, clara e objetiva dos fatos. Encerra-se com a fórmula "É o breve relatório. Passo à manifestação.".
- Fundamentação: Divide-se em "Questões Processuais" (análise de preliminares, ilegitimidade, prescrição, vícios) e "Mérito" (análise crítica das provas, aplicação da legislação, precedentes, doutrina).
- Conclusão: O posicionamento conclusivo sobre se o MP opina pela procedência total, parcial ou improcedência, além de registrar o acolhimento ou rejeição das preliminares discutidas.`
  },
  {
    id: "teoria-civel-8",
    category: "Teoria - Cível",
    title: "8. Agravo de Instrumento",
    content: `Cabimento e Identificação: Recurso cabível contra decisões interlocutórias previstas no art. 1.015 do CPC ou pela teoria da taxatividade mitigada em casos urgentes. A banca apontará para uma decisão que, embora não extinga o processo, causa gravame ou prejuízo na condução do processo.

Estrutura da Peça: Constituído por Petição de Interposição (dirigida ao Presidente ou Relator do Tribunal) e pelas Razões Recursais (dirigidas ao Tribunal/Câmara).

- Razões Recursais: Inclui cabeçalho, narrativa fática e pressupostos de admissibilidade (tempestividade, preparo — MP é isento —, cabimento e legitimidade recursal).
- Mérito: Argumentação voltada à demonstração de erro de julgamento (error in judicando) ou erro de procedimento (error in procedendo).
- Tutela Antecipada / Efeito Suspensivo: Quando presente a probabilidade do direito e risco ao resultado útil, formula-se pedido de concessão de efeito suspensivo ou antecipação da tutela recursal (art. 1.019, I, do CPC).
- O encerramento requer indicação de nome e endereço dos advogados e informação sobre juntada de peças obrigatórias (art. 1.017 CPC).`
  },
  {
    id: "teoria-civel-9",
    category: "Teoria - Cível",
    title: "9. Apelação",
    content: `Cabimento e Identificação: O recurso adequado contra sentenças que extinguem a fase de conhecimento, liquidação ou execução (art. 1.009 do CPC).

Estrutura da Peça: Como o agravo, divide-se em Petição de Interposição (dirigida ao juiz a quo) e Razões Recursais (dirigidas ao Tribunal).

- Petição de Interposição: Pede-se a oportunidade de retratação (nos casos específicos do CPC), a intimação do apelado para contrarrazões e a remessa ao Tribunal ad quem.
- Razões Recursais:
  - Narrativa Fática;
  - Pressupostos de Admissibilidade (legitimidade pelo art. 996 e 179 do CPC);
  - Prejudiciais e Preliminares de Mérito;
  - Causa Madura: Possibilidade do Tribunal decidir o mérito imediatamente se a causa estiver madura (art. 1.013, § 3º e 4º, do CPC);
  - Mérito: argumentação jurídica sobre o error in judicando ou in procedendo;
  - Pedido de Efeito Suspensivo e de procedência do recurso.`
  },
  {
    id: "teoria-civel-10",
    category: "Teoria - Cível",
    title: "10. Contrarrazões",
    content: `Cabimento e Identificação: Utilizadas pelo Ministério Público, na qualidade de parte ou de fiscal da lei, para responder a um recurso interposto pela parte contrária. O enunciado costuma indicar a abertura de prazo após uma decisão em que o oponente apresentou recurso.

Estrutura da Peça: Não há petição de interposição, o Ministério Público apenas apresenta sua manifestação aos autos respondendo ao recurso. A estrutura engloba:

- Cabeçalho: Identificação das partes.
- Narrativa Fática: Breve relato processual focado nos motivos do recurso adverso.
- Pressupostos de Admissibilidade: Verificação de intempestividade, ilegitimidade ou outro defeito no recurso da parte contrária.
- Prejudiciais e Preliminares de Mérito: Verificação de decadência/prescrição ou vícios processuais que ensejam a extinção (art. 485 e 487 do CPC).
- Mérito: Fundamentação demonstrando o porquê de se concordar com a sentença mantida ou a refutação aos argumentos da parte contrária.
- Conclusão/Pedidos: Ao final, opina-se ou requer-se o improvimento (ou provimento parcial) do recurso interposto, com a manutenção da sentença, pugnando ainda pela condenação nas custas pertinentes.`
  }
];
