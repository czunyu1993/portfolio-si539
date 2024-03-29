#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import jinja2
import os
import logging

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainHandler(webapp2.RequestHandler):
    def get(self):
        # get the current path
        filepath = self.request.path

        # deal with '/' and get titlename from path
        if filepath == '/' or filepath == '/index.html':
            filepath = '/index.html'
            titlename = 'home'
        else:
            titlename = filepath[1:-5]

        # concatenate path string
        tempath = 'templates' + filepath

        # get the template
        tem = JINJA_ENVIRONMENT.get_template(tempath)

        # implement the template with specific title_name
        self.response.write(tem.render({'title_name':titlename.upper()}))


    def post(self):
        
        visitor = self.request.get('name')
        email = self.request.get('email')
        mesg = self.request.get('message')

        # Sorry I cannot find how to send email to myself...

        tempath = 'templates/contact.html'
        tem = JINJA_ENVIRONMENT.get_template(tempath)
        self.response.write(tem.render({'title_name':'CONTACT'}))


# "/","/index","/hobby","/project" use same handler
# "/login" uses its own handler
app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/index.html', MainHandler),
    ('/hobby.html', MainHandler),
    ('/project.html', MainHandler),
    ('/contact.html', MainHandler)
], debug=True)
