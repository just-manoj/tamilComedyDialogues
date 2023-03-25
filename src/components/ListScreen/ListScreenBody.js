import { View, FlatList } from "react-native";
import ListAudioItem from "./ListAudioItems";

const ListScreenBody = () => {
  const dummyList = [
    {
      dialogueId: 1,
      audioUri:
        "https://vadiveludialogues.s3.ap-south-1.amazonaws.com/pothum+pothum+list+perusa+poitu+irruku.mpeg",
      tamilTitle: "போதும் போதும் list பெருசா போயிட்டு இருக்கு",
      englishTitle: "Pothum pothum list perusa poitu iruku",
    },
    {
      dialogueId: 2,
      audioUri:
        "https://vadiveludialogues.s3.ap-south-1.amazonaws.com/Kaasu+illa+pa.mpeg",
      tamilTitle: "காசு இல்ல பா",
      englishTitle: "Kaasu illa pa",
    },
    {
      dialogueId: 3,
      audioUri:
        "https://vadiveludialogues.s3.ap-south-1.amazonaws.com/manda+mela+irrutha+konda+ya+marakalaye+da.mpeg",
      tamilTitle: "மண்ட மேல இருந்த கொண்டைய மறந்துடேன டா",
      englishTitle: "Manda mela iruntha kondaya marathutena da",
    },
    {
      dialogueId: 4,
      audioUri:
        "https://vadiveludialogues.s3.ap-south-1.amazonaws.com/singam+kai+erakiduche.mpeg",
      tamilTitle: "சிங்கம் கலை இறங்கிருச்சி",
      englishTitle: "Singam kalai erangiruchi",
    },
  ];

  return (
    <View>
      <FlatList
        data={dummyList}
        keyExtractor={({ dialogueId }) => dialogueId}
        renderItem={({ item }) => <ListAudioItem {...item} />}
      />
    </View>
  );
};

export default ListScreenBody;
