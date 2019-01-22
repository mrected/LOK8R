class UserInfoController < ApplicationController


    def index
        user_info = current_account.user_infos.first_or_initialize
        search_info = current_account.search_infos.first_or_initialize

        render json: {
            user: {
                    id: user_info.id,
                    email: current_account.email,
                    first_name: user_info.first_name,
                    alias: user_info.alias,
                    last_name: user_info.last_name,
                    gender: user_info.gender,
                    dob_month_year: user_info.dob_month_year,
                    birth_state: user_info.birth_state,
                },
            search: {
                    id: search_info.id,
                    first_name: search_info.first_name,
                    alias: search_info.alias,
                    last_name: search_info.last_name,
                    gender: search_info.gender,
                    dob_month_year: search_info.dob_month_year,
                    birth_state: search_info.birth_state,
                }
        }
    end
end
 
