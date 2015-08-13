class Api::PropertiesController < ApplicationController

  def index
    @properties = Property.all
  end

  def followed
    @properties = current_user.followed_properties
  end

  def invested
    @properties = current_user.invested_properties
  end

  def show
    @property = Property.find(params[:id])
  end


end
