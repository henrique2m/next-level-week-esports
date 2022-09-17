import { View, Image, FlatList } from "react-native";

import { Heading } from "../../components/Heading";

import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";

import { GAMES } from "../../utils/games";
import { GameCard } from "../../components/GameCard";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subTitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(game) => game.id}
        renderItem={({ item }) => <GameCard data={item} />}
        contentContainerStyle={styles.contentLeft}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
