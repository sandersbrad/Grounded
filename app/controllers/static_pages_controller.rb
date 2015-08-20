class StaticPagesController < ApplicationController
  def root

  end

  def index
    if current_user
      render :root
    else
      render :index
    end
  end
end
