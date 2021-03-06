class SearchResultsController < ApplicationController



    def match(user_info, search_info)
        m = [
            user_info.first_name&.downcase == search_info.first_name&.downcase,
            user_info.last_name&.downcase == search_info.last_name&.downcase,
            user_info.alias&.downcase == search_info.alias&.downcase,
            user_info.dob_month_year == search_info.dob_month_year,
            user_info.birth_state == search_info.birth_state,

        ]
        m.count(true) >= 3
        
    end


    def index
        user_id = current_account.id
        my_search_info = SearchInfo.find_by(account_id: user_id)
        my_user_info = UserInfo.find_by(account_id: user_id)

        my_search_info = current_account.search_infos.first 
        my_user_info = current_account.user_infos.first


        # array of all the user info (except me)
        all_user_info = UserInfo.all.where.not(id: user_id)

        # All user infos that match me.
        matches = all_user_info.select { |user_info| match(user_info, my_search_info ) }

        # two dimensional array of users that match (first index) and their searches (second index)
        matches_and_searches = matches.map { |user| [user, user.search_infos]}

        two_way_matches = matches_and_searches.select { |user, searches| searches.any? { |search_info| match(my_user_info, search_info) } }

        users_with_two_way_matches = two_way_matches.map { |user, searches| user }
       
        render json: {
            results: users_with_two_way_matches.map do |user_info| 
                {
                    id: user_info.id,
                    email: user_info.account.email,
                    user_first: user_info.first_name,
                    user_alias: user_info.alias,
                    user_last: user_info.last_name,
                    user_gender: user_info.gender,
                    user_dob_month_year: user_info.dob_month_year,
                    user_birth_state: user_info.birth_state,             
                }
            end
        }
    end
end

