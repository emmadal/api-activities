import activities from "./data.ts";
import db from "./mongo.ts";

export const Controllers = {
  allActivies: async (ctx: any) => {
    const data = await db.find();
    if (data) {
      ctx.response.body = {
        success: true,
        data,
      };
      return;
    }
  },
  oneActivity: async (ctx: any) => {
    if (ctx.params.id) {
      const data = await db.findOne({ _id: { $oid: ctx.params.id } });
      if (data) {
        ctx.response.status = 200;
        ctx.response.body = {
          success: true,
          data,
        };
        return;
      } else {
        ctx.response.status = 404;
        ctx.response.body = { success: false, message: "cannot find the data" };
        return;
      }
    }
  },
  createActivity: async (ctx: any) => {
    if (ctx.request.hasBody) {
      ctx.response.status = 200;
      const { value } = await ctx.request.body();
      const data = await db.insertOne(value);
      ctx.response.body = { success: true, message: "data created", data };
      return;
    } else {
      ctx.response.status = 404;
      ctx.response.body = { success: false, message: "no data post" };
      return;
    }
  },
  deleteActivity: async (ctx: any) => {
    if (ctx.params.id) {
      const count = await db.deleteOne({ _id: { $oid: ctx.params.id } });
      if (!count) {
        ctx.response.status = 404;
        ctx.response.body = {
          success: false,
          message: "no activity deleted",
        };
      } else {
        ctx.response.status = 200;
        ctx.response.body = {
          success: true,
          message: "activity deleted",
        };
      }
    } else {
      ctx.response.status = 404;
      ctx.response.body = {
        success: false,
        message: "No data found to delete",
      };
    }
  },
  updateActivity: async (ctx: any) => {
    if (ctx.request.hasBody) {
      const { value } = await ctx.request.body();
      const updated = await db.updateOne(
        { _id: { $oid: ctx.params.id } },
        { $set: { ...value } },
      );
      if (updated) {
        ctx.response.status = 200;
        ctx.response.body = {
          success: true,
          message: "data updated",
          data: updated,
        };
      } else {
        ctx.response.status = 404;
        ctx.response.body = {
          success: false,
          message: "no data updated",
        };
      }
    } else {
      ctx.response.status = 404;
      ctx.response.body = {
        success: false,
        message: "no body value",
      };
    }
  },
};
