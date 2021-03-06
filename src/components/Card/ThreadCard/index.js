import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'components';
import moment from 'moment';

const ThreadCard = props => {
  const {
    goDetail,
    goProfile,
    detail,
    data,
    commentTotal,
    disableProfile,
    onReaction,
  } = props;
  const vFormatter = num => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'K'
      : Math.sign(num) * Math.abs(num);
  };
  return (
    <View style={styles.container(detail)}>
      <View style={styles.tpHCard}>
        <TouchableOpacity
          style={styles.tpHCardInfo}
          disabled={disableProfile}
          onPress={goProfile}>
          <Image source={{uri: data.user.avatar}} style={styles.avatar} />
          <View style={styles.tpHCardMiddle}>
            <Text style={styles.fullName}>{data.user.full_name}</Text>
            <Text style={styles.postDate}>
              {moment(data.created_at).fromNow()}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="dots-three-horizontal"
            type="Entypo"
            style={styles.reportIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity disabled={detail} onPress={goDetail}>
        <Text style={styles.postTitle} numberOfLines={2}>
          {data.title}
        </Text>
        {data.image && (
          <Image
            source={{
              uri: data.image,
            }}
            resizeMode="cover"
            style={styles.postImage}
          />
        )}
      </TouchableOpacity>
      <View style={styles.btHcard(detail)}>
        <View style={styles.btHFlex}>
          <View style={styles.reactionSection}>
            <TouchableOpacity
              style={styles.reactionBtn}
              onPress={() => onReaction({type: 'beer', id: data.id})}>
              <Image
                source={require('assets/reaction-icon/beers.png')}
                style={styles.reactionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.reactionBtn}
              onPress={() => onReaction({type: 'love', id: data.id})}>
              <Image
                source={require('assets/reaction-icon/love.png')}
                style={styles.reactionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.reactionBtn}
              onPress={() => onReaction({type: 'raised_hands', id: data.id})}>
              <Image
                source={require('assets/reaction-icon/raised_hands.png')}
                style={styles.reactionIcon}
              />
            </TouchableOpacity>
            {data.total_reaction > 0 && (
              <View style={styles.reactionTotal}>
                <Text style={styles.reactionTotalValue}>
                  {data.total_reaction}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.totalViewSection}>
          <Image source={require('assets/eye.png')} style={styles.viewIcon} />
          <Text style={styles.totalView}>
            {vFormatter(data.total_view ? data.total_view : 0)}
          </Text>
        </View>
        <TouchableOpacity
          disabled={detail}
          onPress={goDetail}
          style={styles.totalCommentSection}>
          <Image
            source={require('assets/comments.png')}
            style={styles.commentIcon}
          />
          <Text style={styles.totalComment}>
            {commentTotal !== undefined ? commentTotal : data.total_comment}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ThreadCard.defaultProps = {
  detail: false,
  disableProfile: false,
};

export default ThreadCard;
