import z from "zod";

const ConditionEnum = z.enum(["USED", "NEW"]);

export const createBookInput = z.object({
  name: z.string(),
  author: z.string(),
  year: z.number().int(),
  price: z.number(),
  discount: z.number().optional(),
  pages: z.number().int(),
  condition: ConditionEnum.default("NEW"),
  description: z.string().optional(),
});

export const updateBookInput = z.object({
  name: z.string().optional(),
  author: z.string().optional(),
  year: z.number().int().optional(),
  price: z.number().optional(),
  discount: z.number().optional(),
  pages: z.number().int().optional(),
  condition: ConditionEnum.default("NEW"),
  description: z.string().optional(),
});

// export const paginationValid = z.object({
//   page: z.number().int().positive().default(1),
//   limit: z.number().int().positive().max(100).default(10),
// });


// export const filterValid = z.object({
//   author: z.string().optional(),
//   year: z.number().int().positive().optional(),
//   minPrice: z.number().positive().optional(),
//   maxPrice: z.number().positive().optional(),
//   condition: z.enum(["USED", "NEW"]).optional(),
// });

export const sortValid = z.object({
  sortBy: z.enum(["USED", "NEW"]).default("NEW"),
  sortOrder: z.enum(["ASC", "DESC"]).default("ASC"),
});

// export const queryParamsValid =
//   paginationValid.merge(filterValid).merge(sortValid);

// export type queryParams = z.infer<typeof queryParamsValid>;
