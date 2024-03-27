// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import DOMPurify from 'dompurify';

const clean = DOMPurify.sanitize(dirty, { USE_PROFILES: { html: true } });

DOMPurify.sanitize('<UL><li><A HREF=//google.com>click</UL>');