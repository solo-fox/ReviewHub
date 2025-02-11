import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../database.types";
import errorMessages from "@workspace/error";
import logger from "@workspace/logger";

export type ProfileView = Database["public"]["Tables"]["profiles"]["Row"];

export default class Profile {
  constructor(public client: SupabaseClient<Database>) {}

  public async view(user_id: string): Promise<NonNullable<ProfileView>> {
    const { data, error } = await this.client
      .from("profiles")
      .select("*")
      .eq("id", user_id)
      .limit(1)
      .single();

    if (error) {
      logger.error(error);
      throw new Error(errorMessages.profile.view.serverError);
    }
    if (data === undefined || data === null)
      throw new Error(errorMessages.profile.view.notFound);

    return data;
  }

  async update(user_id: string, payload: Partial<ProfileView>): Promise<void> {
    const { error } = await this.client
      .from("profiles")
      .update(payload)
      .eq("id", user_id);

    if (error) {
      logger.error(error);
      throw new Error(errorMessages.profile.view.serverError);
    }
  }
}
