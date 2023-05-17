Blockly.Blocks['imagem_eletro'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: '1ondaP.png', width: 200, height: 200, alt: 'heart 1'}, 'heart1'],
            [{src: '2segmentoPR.png', width: 200, height: 200, alt: 'heart 2'}, 'heart2'],
            [{src: '3ondaQRS.png', width: 200, height: 200, alt: 'heart 3'}, 'heart3'],
            [{src: '4ondaT.png', width: 200, height: 200, alt: 'heart 4'}, 'heart4']
          ]
        }
      ],
      message1: 'Em qual local esse fenômeno ocorre: %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Sino atrial', 'ondaP'],
            ['Nodo AV', 'segementoPR'],
            ['feixe de His purKinje', 'ondaQRS'],
            ['Ventrículo', 'ondaT']
          ]
        }
      ],
      message2: 'O que está acontecendo: %1',
      args2: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Estímulo elétrico gerando a despolarização atrial', 'ondaP'],
            ['Condução de estimulo elétrico do átrio para os ventrículos', 'segementoPR'],
            ['Condução dos impulsos elétricos para as câmaras inferiores', 'ondaQRS'],
            ['Repolarização ventricular', 'ondaT']
          ]
        }
      ],
      message3: 'Onda elétrica gerada no ECG: %1',
        args3: [
          {
            type: 'input_value',
            name: 'onda',
            check: 'Onda',
          }
        ],
        message4: 'Movimento físico disparado: %1',
        args4: [
          {
            type: 'input_value',
            name: 'mov',
            check: 'Mov',
          }
        ],
      colour: 80,
      tooltip: 'Coração',
      nextStatement: null,
      previousStatement: null
    })
  }
}

Blockly.Blocks['imagem_mov'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: '1movimento.png', width: 200, height: 200, alt: 'heart_mov 1'}, 'heart_mov1'],
            [{src: '2movimento_segmentoPR.png', width: 200, height: 200, alt: 'heart_mov 2'}, 'heart_mov2'],
            [{src: '2movimento.png', width: 200, height: 200, alt: 'heart_mov 3'}, 'heart_mov3'],
            [{src: '3movimento.png', width: 200, height: 200, alt: 'heart_mov 4'}, 'heart_mov4']
          ]
        }
      ],
      message1: 'onde: %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Átrio', 'mov1'],
            ['Nó AV', 'mov2'],
            ['Ventrículo', 'mov3']
          ]
        }
      ],
      message2: 'ação: %1',
      args2: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Despolarização à contração', 'mov1'],
            ['Convergência dos estímulos atriais + retardo da condução do estímulo elétrico', 'mov2'],
            ['Repolarização à diastole', 'mov3']
          ]
        }
      ],
      message3: 'resultado: %1',
      args3: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Passagem do sangue do átrio para o ventrículo', 'mov1'],
            ['Permitir a contração e esvaziamento atrial antes da contração ventricular', 'segementoPR'],
            ['Envio do sangue para o sistema arterial pulmonar (ventrículo direito) e sistêmico (ventrículo esquerdo)', 'ondaQRS'],
            ['Enchimento passivo dos ventrículos pela diferença de pressão entre átrios/ventriculos', 'ondaT']
          ]
        }
      ],
        colour: 300,
        tooltip: 'Eletro',
        output: 'Mov'
    })
  }
}

Blockly.Blocks['imagem_onda'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: '1ondaPECG.png', width: 200, height: 200, alt: 'ecg 1'}, 'ecg1'],
            [{src: '2segmentoPRECG.png', width: 200, height: 200, alt: 'ecg 2'}, 'ecg2'],
            [{src: '3ondaQRSECG.png', width: 200, height: 200, alt: 'ecg 3'}, 'ecg3'],
            [{src: '5segmentoSTECG.png', width: 200, height: 200, alt: 'ecg 5'}, 'ecg5'],
            [{src: '4ondaTECG.png', width: 200, height: 200, alt: 'ecg 4'}, 'ecg4']
          ]
        }
      ],
        colour: 20,
        tooltip: 'Eletro',
        output: 'Onda'
    })
  }
}