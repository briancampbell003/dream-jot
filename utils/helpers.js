module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear() + 5
      }`;
  },
  format_tags: (tagstring) => {
    let tagArray = tagstring.split(',');
    console.log(tagArray);
    let tags = [' Pleasant ', ' Adventure', ' Spooky', ' Nostalgic', ' Upsetting', ' Inspiring', ' Intense', ' Feverish', ' Bizarre'];
    let activeTags = [];
    for (let i = 0; i < tags.length; i++) {
      if ( tagArray[i] === 'true' ) {
        activeTags.push(tags[i]);
      }
    }
    console.log(activeTags);
    return activeTags;
  },
};
