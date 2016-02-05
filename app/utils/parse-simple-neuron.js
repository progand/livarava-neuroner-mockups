export default function parseSimpleNeuron(raw = "", options = {}) {
  var {type} = options,
    url,
    title,
    image,
    postDescription,
    regexps = {
      image: {
        link: /\.(jpeg|jpg|gif|png)$/,
        dataURL: /^data:image\/(.+);base64,(.*)$/
      },
      audio: /^data:audio\/(.+);base64,(.*)$/,
      url: /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,
      phone: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i,
      email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
  var videoId = '';

  if (!_.isObject(raw) && !(raw && _.isString(raw))) {
    return null;
  }

  if (!_.isObject(raw)) {
    videoId = raw.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
  }

  if (type) {
    switch (type) {
      case 'rss':
        if (!regexps.url.test(raw)) {
          return null;
        }
        image = '/img/neurons/rss.png';
    }
  } else if (videoId !== null && videoId[1]) {
    type = 'video';
    image = 'http://img.youtube.com/vi/' + videoId[1] + '/default.jpg';
  } else if (regexps.image.link.test(raw) || regexps.image.dataURL.test(raw)) {
    type = 'image';
    image = raw;
  } else if (regexps.audio.test(raw)) {
    type = 'audio';
  } else if (regexps.url.test(raw)) {
    type = raw.includes('rss') || raw.includes('feed') ? 'rss' : 'link';
  } else if (regexps.phone.test(raw)) {
    type = 'phone';
  } else if (regexps.email.test(raw)) {
    type = 'email';
  } else if (_.isObject(raw)) {
    type = 'post';
    image = raw.image;
    postDescription = raw.postDescription;
  } else{
    type = 'text';
  }

  if (!image) {
    image = `/img/neurons/${type}.png`;
  }


  if (['video', 'image', 'audio', 'link', 'rss'].contains(type)) {
    url = raw;
  }
  if(url){
    title = options.title || raw;
  } else if (_.isObject(raw)) {
    title = raw.title;
  } else {
    title = raw;
  }

  return {
    created: new Date(),
    title: title,
    url: url,
    image: image,
    postDescription: postDescription,
    type: type,
    type_title: type
  };
}
