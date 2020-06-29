CMS.registerPreviewStyle('/css/screen.css');
CMS.registerPreviewStyle('/css/custom.css');
CMS.registerMediaLibrary({
  name: 'disabled',
  init: () => ({ show: () => undefined, enableStandalone: () => false }),
});
