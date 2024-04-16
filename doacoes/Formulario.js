import React, { useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, Text, StyleSheet, Image, View, Alert } from 'react-native';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [estadoMaterial, setEstadoMaterial] = useState('');
  const [tipoMaterial, setTipoMaterial] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = () => {

    if (!nome || !telefone || !email || !estadoMaterial || !tipoMaterial || !endereco) {
      Alert.alert('Campos Incompletos', 'Preencha todos os campos para enviar o formulário.');
      return;
    }

    console.log({
      nome,
      telefone,
      email,
      estadoMaterial,
      tipoMaterial,
      endereco,
    });


    setNome('');
    setTelefone('');
    setEmail('');
    setEstadoMaterial('');
    setTipoMaterial('');
    setEndereco('');


    Alert.alert('Formulário Enviado!', 'Obrigado por enviar o formulário.');
  };

  return (

    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./assets/seta.png')}
       
      />

      <Image
        source={require('./img2.png')}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        Doação De Materiais
      </Text>

      <Text style={styles.texto2}>
        Nosso compromisso com a sustentabilidade vai além da venda de produtos recicláveis.
      </Text>

      <View style={styles.retangulo}>
        <Text style={styles.textoRetangulo}>Faça a diferença ao doar! Suas contribuições não apenas beneficiam o planeta, mas também podem render pontos para descontos em suas próximas compras, incentivando um ciclo sustentável de reciclagem.</Text>
      </View>
      <View style={styles.retangulo}>
        <Text style={styles.textoRetangulo}>Doar materiais recicláveis é um gesto poderoso que alimenta o ciclo de reciclagem, reduzindo a necessidade de extração de recursos naturais e promovendo a consciência ambiental.</Text>
      </View>
      <View style={styles.retangulo}>
        <Text style={styles.textoRetangulo}>Ao doar materiais recicláveis, você contribui para a redução de resíduos, preservação de recursos naturais e criação de um ambiente mais saudável para todos.</Text>
      </View>
      <Text style={styles.texto}>
        Formulário Para Doação
      </Text>
      <Text style={styles.texto3}>
        Preencha De Acordo Com As Informações
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Estado do Material"
        value={estadoMaterial}
        onChangeText={setEstadoMaterial}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo do Material"
        value={tipoMaterial}
        onChangeText={setTipoMaterial}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <View style={styles.botaoContainer}>
        <TouchableOpacity
          style={styles.botao}
          onPress={handleSubmit}
        >
          <Text style={styles.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 30,
    marginTop: 50,
    margin: 20,
  },

  texto: {
    marginTop: 30,
    marginBottom: 12,
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'left',
    fontWeight: '800',
    fontFamily: 'Font.ttf',
  },
  texto2: {
    marginTop: 30,
    marginBottom: 60,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    width: 350,
    fontFamily: 'Font.ttf',

  },
  texto3: {

    marginBottom: 25,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    width: 350,
    fontFamily: 'Font.ttf',

  },
  input: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#6BBD4E',
    borderRadius: 9,
    fontSize: 13,
    padding: 15,
    margin: 10,
  },
  botaoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#6BBD4E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 9,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Font.ttf',
    fontWeight: '400',
  },
  imagem: {
    width: '100%',
    height: 300,
    marginBottom: 12,
    marginTop: 20,
  },
  retangulo: {
    borderWidth: 2,
    borderColor: '#6BBD4E',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  textoRetangulo: {
    marginTop: 30,
    marginBottom: 60,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
});

export default Formulario;
