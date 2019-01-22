class AccountsController < ApplicationController
  def update
    current_account.user_infos.first_or_initialize.update(user_info_params)
    current_account.search_infos.first_or_initialize.update(search_info_params)

    head :ok
  end

  private

  def user_info_params
    params.require(:userInfo).permit(:first_name, :alias, :last_name, :gender, :dob_month_year, :birth_state)
  end

  def search_info_params
    params.require(:searchInfo).permit(:first_name, :alias, :last_name, :gender, :dob_month_year, :birth_state)
  end
end
