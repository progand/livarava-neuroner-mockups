export default function parseSimpleNeuron(raw="", options={}) {
  var type = 'text',
    image = '/img/neurons/text.png',
    url;

  if (!(raw && _.isString(raw))) {
    return null;
  }

  var videoId = raw.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
  if (videoId !== null && videoId[1]) {
    type = 'video';
    image = 'http://img.youtube.com/vi/' + videoId[1] + '/default.jpg';
  } else if (/\.(jpeg|jpg|gif|png)$/.test(raw) || /^data:image\/(.+);base64,(.*)$/.test(raw)) {
    type = 'image';
    image = raw;
  } else if (/^data:audio\/(.+);base64,(.*)$/.test(raw)) {
    type = 'audio';
    image = '/img/neurons/audio.png';
  } else if (/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(raw)) {
    type = 'link';
    image = '/img/neurons/link.png';
  } else if (/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i.test(raw)) {
    type = 'phone';
    image = '/img/neurons/phone.png';
  } else if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(raw)) {
    type = 'email';
    image = '/img/neurons/email.png';
  } else {
    options.header = raw;
  }

  if(['video', 'image', 'audio', 'link'].contains(type)){
    url = raw;
  }

  return {
    id: Date.now(),
    created: new Date(),
    title: options.title || raw,
    url: url,
    image: image,
    type: type,
    type_title: type
  };
}
