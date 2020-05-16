# frozen_string_literal: true

source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

ruby '2.5.1'

gem 'rails', '~> 5.1.4'

gem 'activesupport'
gem 'audited', '~> 4.5'
gem 'baby_squeel'
gem 'best_in_place'
gem 'coffee-rails', '~> 4.2'
gem 'haml'
gem 'jbuilder', '~> 2.5'
gem 'pg'
gem 'puma', '~> 3.7'
gem 'ransack'
gem 'rqrcode'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'
gem 'will_paginate', '~> 3.1.0'
gem 'jquery-rails'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'dotenv'
  gem 'factory_bot_rails'
  gem 'rails-controller-testing'
  gem 'rspec-rails', '~> 3.6'
  gem 'selenium-webdriver'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'capybara-selenium'
  gem 'cucumber-rails', require: false
  gem 'database_cleaner'
  gem 'launchy'
  gem 'rspec_junit_formatter'
end
