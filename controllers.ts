import activities from "./data.ts";
export const Controllers = {
  allActivies: (ctx: any) => {
    ctx.response.body = activities;
    return;
  },
  oneActivity: async (ctx: any) => {
    const data = await activities.find((m) => m.id === ctx.params.id);
    if (data) {
      ctx.response.status = 200;
      ctx.response.body = data;
      return;
    } else {
      ctx.response.status = 404;
      ctx.response.body = { error: "cannot find the data" };
      return;
    }
  },
  createActivity: async (ctx: any) => {
    if (ctx.request.hasBody) {
      ctx.response.status = 200;
      const { value } = await ctx.request.body();
      activities.push(value);
      ctx.response.body = value;
      return;
    } else {
      ctx.response.status = 404;
      ctx.response.body = { error: "no data post" };
      return;
    }
  },
  deleteActivity: async (ctx: any) => {
    const data = await activities.find((m) => m.id === ctx.params.id);
    const dataID = await activities.findIndex((m) => m.id === ctx.params.id);
    if (data && ctx.params.id) {
      activities.splice(dataID, 1);
      ctx.response.status = 200;
      ctx.response.body = data;
      return;
    } else {
      ctx.response.status = 404;
      ctx.response.body = { error: "cannot find the data to delete" };
      return;
    }
  },
  updateActivity: async (ctx: any) => {
    const data = await activities.find((m) => m.id === ctx.params.id);
    const dataIndex = await activities.findIndex((m) => m.id === ctx.params.id);
    if (data && ctx.request.hasBody) {
      const { value } = await ctx.request.body();
      const updateData = { ...data, ...value };
      activities.splice(dataIndex, 1, updateData);
      ctx.response.status = 200;
      ctx.response.body = updateData;
      return;
    } else {
      ctx.response.status = 404;
      ctx.response.body = { error: "cannot find the data to update it" };
      return;
    }
  },
};