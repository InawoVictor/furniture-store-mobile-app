import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xLarge + 10,
        width: SIZES.width -44,
        zIndex: 999,
    },
    Image: {
        aspectRatio: 1,
        resizeMode:"cover",
    },

    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },

    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        width: SIZES.width -44,
        top: SIZES.large,
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.large,
    },
    priceWrapper: {
        borderRadius: SIZES.large,
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 10,
    },
    price: {        
        fontFamily: "semibold",
        fontSize: SIZES.large,
    },

    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -10,
        top: 5,
    },
    rating: {
        top: SIZES.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
        marginHorizontal: SIZES.large
    },  
    ratingText: {
        fontFamily: "medium",
        color: COLORS.gray,
        fontSize: SIZES.small,
        paddingHorizontal: SIZES.xSmall
    },

    descriptionWrapper: {
        marginTop: SIZES.large +2,
        marginHorizontal: SIZES.large,
    },
    description: {
        fontFamily: 'medium',
        fontSize: SIZES.large -2,
    },
    descText: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
        textAlign: "justify",
        marginBottom: SIZES.small,
    },
    location: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        padding: 5,
        borderRadius: SIZES.large,
    },
    
    cartRow: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width ,
    },
    cartBtn: {
        width: SIZES.width *0.7,
        backgroundColor: COLORS.black,
        padding: SIZES.small/2,
        borderRadius: SIZES.large,
        marginLeft: 12,
    },
    cartText: { 
        fontFamily: "bold",
        fontSize: SIZES.large,
        color: COLORS.lightWhite,
        marginLeft:SIZES.small,
    },
    addCart: {
        width: 40,
        height: 40,
        borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default styles;