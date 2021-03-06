import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    height: width * 0.27,
    backgroundColor: 'transparent',
    zIndex: 0,
  },
  headerSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  headerLeft: {
    flex: 1,
  },
  headerLeftIcon: {
    fontSize: RFValue(22),
    color: Colors.WHITE,
  },
  headerRightIcon: {
    fontSize: RFValue(22),
    color: Colors.WHITE,
  },
  profileInfoSection: {
    flex: 1,
    zIndex: 1,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: width * 0.07,
    borderTopRightRadius: width * 0.07,
    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: -width * 0.06,
  },
  profileInfoWrap: {
    alignItems: 'center',
    paddingBottom: width * 0.1,
  },
  avatarSection: {
    width: width * 0.2,
    height: width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: 75,
    marginTop: -width * 0.1,
    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  avatar: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 75,
  },
  fullName: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(18),
    marginTop: width * 0.04,
    color: Colors.PRIMARY_DARK,
  },
  major: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(12),
    letterSpacing: 0.5,
    color: Colors.PRIMARY_MATE,
    marginTop: width * 0.02,
  },
  bio: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
    color: Colors.PRIMARY_DARK,
    marginTop: width * 0.05,
    textAlign: 'center',
    marginHorizontal: width * 0.05,
    opacity: 0.9,
  },

  lastProfileSection: {
    flexDirection: 'row',
    marginTop: width * 0.08,
  },
  lastProfileWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastProfileTotal: {
    fontSize: RFValue(18),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY_DARK,
  },
  lastProfileLable: {
    fontSize: RFValue(12),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: '#8793ad',
    marginTop: width * 0.01,
  },
  lastProfileBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.GRAY_LIGHT100,
  },
  separator: {
    width: width,
    height: width * 0.02,
    backgroundColor: Colors.WHITE_MEDIUM,
  },
  followersSection: {
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.04,
  },
  tpFollower: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tpFollowerTitle: {
    flex: 1,
    fontSize: RFValue(14),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY_DARK,
  },
  tpFollowerRightTitle: {
    fontSize: RFValue(11),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY,
  },

  noThreadsSection: {
    backgroundColor: Colors.WHITE_MEDIUM,
    borderRadius: 20,
    marginTop: width * 0.05,
    height: width / 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.2,
  },
  scaredIcon: {
    width: width * 0.2,
    height: width * 0.2,
    opacity: 0.5,
  },
  noThreadsTitle: {
    textAlign: 'center',
    fontSize: RFValue(12),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY_MATE,
    marginTop: width * 0.02,
  },
});
