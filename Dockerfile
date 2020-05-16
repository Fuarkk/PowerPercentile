FROM circleci/ruby:2.5.1-node-browsers

USER node
WORKDIR /app

COPY Gemfile Gemfile.lock /app/

RUN bundle install --jobs 20 --retry 5
