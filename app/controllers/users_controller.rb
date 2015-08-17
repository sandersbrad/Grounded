class UsersController < ApplicationController
  def new
    @hide_sign_up = true

    if params[:user]
      @user = User.new(user_params)
    else
      @user = User.new
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render '/static_pages/root'
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:password, :email)
  end
end
