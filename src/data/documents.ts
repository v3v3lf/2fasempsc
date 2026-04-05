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
