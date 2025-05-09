
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Residence
 * 
 */
export type Residence = $Result.DefaultSelection<Prisma.$ResidencePayload>
/**
 * Model Resident
 * 
 */
export type Resident = $Result.DefaultSelection<Prisma.$ResidentPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.residence`: Exposes CRUD operations for the **Residence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Residences
    * const residences = await prisma.residence.findMany()
    * ```
    */
  get residence(): Prisma.ResidenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resident`: Exposes CRUD operations for the **Resident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Residents
    * const residents = await prisma.resident.findMany()
    * ```
    */
  get resident(): Prisma.ResidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Address: 'Address',
    Residence: 'Residence',
    Resident: 'Resident',
    Staff: 'Staff'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "address" | "residence" | "resident" | "staff"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Residence: {
        payload: Prisma.$ResidencePayload<ExtArgs>
        fields: Prisma.ResidenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResidenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResidenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidencePayload>
          }
          findFirst: {
            args: Prisma.ResidenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResidenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidencePayload>
          }
          findMany: {
            args: Prisma.ResidenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidencePayload>[]
          }
          create: {
            args: Prisma.ResidenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidencePayload>
          }
          createMany: {
            args: Prisma.ResidenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResidenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidencePayload>[]
          }
          delete: {
            args: Prisma.ResidenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidencePayload>
          }
          update: {
            args: Prisma.ResidenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidencePayload>
          }
          deleteMany: {
            args: Prisma.ResidenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResidenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResidenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidencePayload>[]
          }
          upsert: {
            args: Prisma.ResidenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidencePayload>
          }
          aggregate: {
            args: Prisma.ResidenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResidence>
          }
          groupBy: {
            args: Prisma.ResidenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResidenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResidenceCountArgs<ExtArgs>
            result: $Utils.Optional<ResidenceCountAggregateOutputType> | number
          }
        }
      }
      Resident: {
        payload: Prisma.$ResidentPayload<ExtArgs>
        fields: Prisma.ResidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          findFirst: {
            args: Prisma.ResidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          findMany: {
            args: Prisma.ResidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>[]
          }
          create: {
            args: Prisma.ResidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          createMany: {
            args: Prisma.ResidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>[]
          }
          delete: {
            args: Prisma.ResidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          update: {
            args: Prisma.ResidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          deleteMany: {
            args: Prisma.ResidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>[]
          }
          upsert: {
            args: Prisma.ResidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          aggregate: {
            args: Prisma.ResidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResident>
          }
          groupBy: {
            args: Prisma.ResidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResidentCountArgs<ExtArgs>
            result: $Utils.Optional<ResidentCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    address?: AddressOmit
    residence?: ResidenceOmit
    resident?: ResidentOmit
    staff?: StaffOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    residences: number
    staff: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residences?: boolean | AddressCountOutputTypeCountResidencesArgs
    staff?: boolean | AddressCountOutputTypeCountStaffArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountResidencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidenceWhereInput
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }


  /**
   * Count Type ResidenceCountOutputType
   */

  export type ResidenceCountOutputType = {
    residents: number
  }

  export type ResidenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residents?: boolean | ResidenceCountOutputTypeCountResidentsArgs
  }

  // Custom InputTypes
  /**
   * ResidenceCountOutputType without action
   */
  export type ResidenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidenceCountOutputType
     */
    select?: ResidenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResidenceCountOutputType without action
   */
  export type ResidenceCountOutputTypeCountResidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    district: string | null
    city: string | null
    state: string | null
    zip_code: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    district: string | null
    city: string | null
    state: string | null
    zip_code: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street: number
    number: number
    district: number
    city: number
    state: number
    zip_code: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    street?: true
    number?: true
    district?: true
    city?: true
    state?: true
    zip_code?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street?: true
    number?: true
    district?: true
    city?: true
    state?: true
    zip_code?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street?: true
    number?: true
    district?: true
    city?: true
    state?: true
    zip_code?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    street: string
    number: string
    district: string
    city: string
    state: string
    zip_code: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    residences?: boolean | Address$residencesArgs<ExtArgs>
    staff?: boolean | Address$staffArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    street?: boolean
    number?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street" | "number" | "district" | "city" | "state" | "zip_code", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residences?: boolean | Address$residencesArgs<ExtArgs>
    staff?: boolean | Address$staffArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      residences: Prisma.$ResidencePayload<ExtArgs>[]
      staff: Prisma.$StaffPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      street: string
      number: string
      district: string
      city: string
      state: string
      zip_code: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    residences<T extends Address$residencesArgs<ExtArgs> = {}>(args?: Subset<T, Address$residencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff<T extends Address$staffArgs<ExtArgs> = {}>(args?: Subset<T, Address$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly street: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'String'>
    readonly district: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly zip_code: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.residences
   */
  export type Address$residencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceInclude<ExtArgs> | null
    where?: ResidenceWhereInput
    orderBy?: ResidenceOrderByWithRelationInput | ResidenceOrderByWithRelationInput[]
    cursor?: ResidenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResidenceScalarFieldEnum | ResidenceScalarFieldEnum[]
  }

  /**
   * Address.staff
   */
  export type Address$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Residence
   */

  export type AggregateResidence = {
    _count: ResidenceCountAggregateOutputType | null
    _avg: ResidenceAvgAggregateOutputType | null
    _sum: ResidenceSumAggregateOutputType | null
    _min: ResidenceMinAggregateOutputType | null
    _max: ResidenceMaxAggregateOutputType | null
  }

  export type ResidenceAvgAggregateOutputType = {
    id: number | null
    address_id: number | null
  }

  export type ResidenceSumAggregateOutputType = {
    id: number | null
    address_id: number | null
  }

  export type ResidenceMinAggregateOutputType = {
    id: number | null
    complement: string | null
    address_id: number | null
  }

  export type ResidenceMaxAggregateOutputType = {
    id: number | null
    complement: string | null
    address_id: number | null
  }

  export type ResidenceCountAggregateOutputType = {
    id: number
    complement: number
    address_id: number
    _all: number
  }


  export type ResidenceAvgAggregateInputType = {
    id?: true
    address_id?: true
  }

  export type ResidenceSumAggregateInputType = {
    id?: true
    address_id?: true
  }

  export type ResidenceMinAggregateInputType = {
    id?: true
    complement?: true
    address_id?: true
  }

  export type ResidenceMaxAggregateInputType = {
    id?: true
    complement?: true
    address_id?: true
  }

  export type ResidenceCountAggregateInputType = {
    id?: true
    complement?: true
    address_id?: true
    _all?: true
  }

  export type ResidenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Residence to aggregate.
     */
    where?: ResidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residences to fetch.
     */
    orderBy?: ResidenceOrderByWithRelationInput | ResidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Residences
    **/
    _count?: true | ResidenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResidenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResidenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResidenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResidenceMaxAggregateInputType
  }

  export type GetResidenceAggregateType<T extends ResidenceAggregateArgs> = {
        [P in keyof T & keyof AggregateResidence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResidence[P]>
      : GetScalarType<T[P], AggregateResidence[P]>
  }




  export type ResidenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidenceWhereInput
    orderBy?: ResidenceOrderByWithAggregationInput | ResidenceOrderByWithAggregationInput[]
    by: ResidenceScalarFieldEnum[] | ResidenceScalarFieldEnum
    having?: ResidenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResidenceCountAggregateInputType | true
    _avg?: ResidenceAvgAggregateInputType
    _sum?: ResidenceSumAggregateInputType
    _min?: ResidenceMinAggregateInputType
    _max?: ResidenceMaxAggregateInputType
  }

  export type ResidenceGroupByOutputType = {
    id: number
    complement: string
    address_id: number
    _count: ResidenceCountAggregateOutputType | null
    _avg: ResidenceAvgAggregateOutputType | null
    _sum: ResidenceSumAggregateOutputType | null
    _min: ResidenceMinAggregateOutputType | null
    _max: ResidenceMaxAggregateOutputType | null
  }

  type GetResidenceGroupByPayload<T extends ResidenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResidenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResidenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResidenceGroupByOutputType[P]>
            : GetScalarType<T[P], ResidenceGroupByOutputType[P]>
        }
      >
    >


  export type ResidenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    complement?: boolean
    address_id?: boolean
    residents?: boolean | Residence$residentsArgs<ExtArgs>
    address?: boolean | Residence$addressArgs<ExtArgs>
    _count?: boolean | ResidenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residence"]>

  export type ResidenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    complement?: boolean
    address_id?: boolean
    address?: boolean | Residence$addressArgs<ExtArgs>
  }, ExtArgs["result"]["residence"]>

  export type ResidenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    complement?: boolean
    address_id?: boolean
    address?: boolean | Residence$addressArgs<ExtArgs>
  }, ExtArgs["result"]["residence"]>

  export type ResidenceSelectScalar = {
    id?: boolean
    complement?: boolean
    address_id?: boolean
  }

  export type ResidenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "complement" | "address_id", ExtArgs["result"]["residence"]>
  export type ResidenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residents?: boolean | Residence$residentsArgs<ExtArgs>
    address?: boolean | Residence$addressArgs<ExtArgs>
    _count?: boolean | ResidenceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResidenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Residence$addressArgs<ExtArgs>
  }
  export type ResidenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Residence$addressArgs<ExtArgs>
  }

  export type $ResidencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Residence"
    objects: {
      residents: Prisma.$ResidentPayload<ExtArgs>[]
      address: Prisma.$AddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      complement: string
      address_id: number
    }, ExtArgs["result"]["residence"]>
    composites: {}
  }

  type ResidenceGetPayload<S extends boolean | null | undefined | ResidenceDefaultArgs> = $Result.GetResult<Prisma.$ResidencePayload, S>

  type ResidenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResidenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResidenceCountAggregateInputType | true
    }

  export interface ResidenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Residence'], meta: { name: 'Residence' } }
    /**
     * Find zero or one Residence that matches the filter.
     * @param {ResidenceFindUniqueArgs} args - Arguments to find a Residence
     * @example
     * // Get one Residence
     * const residence = await prisma.residence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResidenceFindUniqueArgs>(args: SelectSubset<T, ResidenceFindUniqueArgs<ExtArgs>>): Prisma__ResidenceClient<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Residence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResidenceFindUniqueOrThrowArgs} args - Arguments to find a Residence
     * @example
     * // Get one Residence
     * const residence = await prisma.residence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResidenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResidenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResidenceClient<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Residence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenceFindFirstArgs} args - Arguments to find a Residence
     * @example
     * // Get one Residence
     * const residence = await prisma.residence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResidenceFindFirstArgs>(args?: SelectSubset<T, ResidenceFindFirstArgs<ExtArgs>>): Prisma__ResidenceClient<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Residence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenceFindFirstOrThrowArgs} args - Arguments to find a Residence
     * @example
     * // Get one Residence
     * const residence = await prisma.residence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResidenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResidenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResidenceClient<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Residences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Residences
     * const residences = await prisma.residence.findMany()
     * 
     * // Get first 10 Residences
     * const residences = await prisma.residence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const residenceWithIdOnly = await prisma.residence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResidenceFindManyArgs>(args?: SelectSubset<T, ResidenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Residence.
     * @param {ResidenceCreateArgs} args - Arguments to create a Residence.
     * @example
     * // Create one Residence
     * const Residence = await prisma.residence.create({
     *   data: {
     *     // ... data to create a Residence
     *   }
     * })
     * 
     */
    create<T extends ResidenceCreateArgs>(args: SelectSubset<T, ResidenceCreateArgs<ExtArgs>>): Prisma__ResidenceClient<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Residences.
     * @param {ResidenceCreateManyArgs} args - Arguments to create many Residences.
     * @example
     * // Create many Residences
     * const residence = await prisma.residence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResidenceCreateManyArgs>(args?: SelectSubset<T, ResidenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Residences and returns the data saved in the database.
     * @param {ResidenceCreateManyAndReturnArgs} args - Arguments to create many Residences.
     * @example
     * // Create many Residences
     * const residence = await prisma.residence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Residences and only return the `id`
     * const residenceWithIdOnly = await prisma.residence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResidenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResidenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Residence.
     * @param {ResidenceDeleteArgs} args - Arguments to delete one Residence.
     * @example
     * // Delete one Residence
     * const Residence = await prisma.residence.delete({
     *   where: {
     *     // ... filter to delete one Residence
     *   }
     * })
     * 
     */
    delete<T extends ResidenceDeleteArgs>(args: SelectSubset<T, ResidenceDeleteArgs<ExtArgs>>): Prisma__ResidenceClient<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Residence.
     * @param {ResidenceUpdateArgs} args - Arguments to update one Residence.
     * @example
     * // Update one Residence
     * const residence = await prisma.residence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResidenceUpdateArgs>(args: SelectSubset<T, ResidenceUpdateArgs<ExtArgs>>): Prisma__ResidenceClient<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Residences.
     * @param {ResidenceDeleteManyArgs} args - Arguments to filter Residences to delete.
     * @example
     * // Delete a few Residences
     * const { count } = await prisma.residence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResidenceDeleteManyArgs>(args?: SelectSubset<T, ResidenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Residences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Residences
     * const residence = await prisma.residence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResidenceUpdateManyArgs>(args: SelectSubset<T, ResidenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Residences and returns the data updated in the database.
     * @param {ResidenceUpdateManyAndReturnArgs} args - Arguments to update many Residences.
     * @example
     * // Update many Residences
     * const residence = await prisma.residence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Residences and only return the `id`
     * const residenceWithIdOnly = await prisma.residence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResidenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResidenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Residence.
     * @param {ResidenceUpsertArgs} args - Arguments to update or create a Residence.
     * @example
     * // Update or create a Residence
     * const residence = await prisma.residence.upsert({
     *   create: {
     *     // ... data to create a Residence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Residence we want to update
     *   }
     * })
     */
    upsert<T extends ResidenceUpsertArgs>(args: SelectSubset<T, ResidenceUpsertArgs<ExtArgs>>): Prisma__ResidenceClient<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Residences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenceCountArgs} args - Arguments to filter Residences to count.
     * @example
     * // Count the number of Residences
     * const count = await prisma.residence.count({
     *   where: {
     *     // ... the filter for the Residences we want to count
     *   }
     * })
    **/
    count<T extends ResidenceCountArgs>(
      args?: Subset<T, ResidenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResidenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Residence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResidenceAggregateArgs>(args: Subset<T, ResidenceAggregateArgs>): Prisma.PrismaPromise<GetResidenceAggregateType<T>>

    /**
     * Group by Residence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResidenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResidenceGroupByArgs['orderBy'] }
        : { orderBy?: ResidenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResidenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResidenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Residence model
   */
  readonly fields: ResidenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Residence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResidenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    residents<T extends Residence$residentsArgs<ExtArgs> = {}>(args?: Subset<T, Residence$residentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends Residence$addressArgs<ExtArgs> = {}>(args?: Subset<T, Residence$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Residence model
   */
  interface ResidenceFieldRefs {
    readonly id: FieldRef<"Residence", 'Int'>
    readonly complement: FieldRef<"Residence", 'String'>
    readonly address_id: FieldRef<"Residence", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Residence findUnique
   */
  export type ResidenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceInclude<ExtArgs> | null
    /**
     * Filter, which Residence to fetch.
     */
    where: ResidenceWhereUniqueInput
  }

  /**
   * Residence findUniqueOrThrow
   */
  export type ResidenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceInclude<ExtArgs> | null
    /**
     * Filter, which Residence to fetch.
     */
    where: ResidenceWhereUniqueInput
  }

  /**
   * Residence findFirst
   */
  export type ResidenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceInclude<ExtArgs> | null
    /**
     * Filter, which Residence to fetch.
     */
    where?: ResidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residences to fetch.
     */
    orderBy?: ResidenceOrderByWithRelationInput | ResidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Residences.
     */
    cursor?: ResidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Residences.
     */
    distinct?: ResidenceScalarFieldEnum | ResidenceScalarFieldEnum[]
  }

  /**
   * Residence findFirstOrThrow
   */
  export type ResidenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceInclude<ExtArgs> | null
    /**
     * Filter, which Residence to fetch.
     */
    where?: ResidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residences to fetch.
     */
    orderBy?: ResidenceOrderByWithRelationInput | ResidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Residences.
     */
    cursor?: ResidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Residences.
     */
    distinct?: ResidenceScalarFieldEnum | ResidenceScalarFieldEnum[]
  }

  /**
   * Residence findMany
   */
  export type ResidenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceInclude<ExtArgs> | null
    /**
     * Filter, which Residences to fetch.
     */
    where?: ResidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residences to fetch.
     */
    orderBy?: ResidenceOrderByWithRelationInput | ResidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Residences.
     */
    cursor?: ResidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residences.
     */
    skip?: number
    distinct?: ResidenceScalarFieldEnum | ResidenceScalarFieldEnum[]
  }

  /**
   * Residence create
   */
  export type ResidenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Residence.
     */
    data: XOR<ResidenceCreateInput, ResidenceUncheckedCreateInput>
  }

  /**
   * Residence createMany
   */
  export type ResidenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Residences.
     */
    data: ResidenceCreateManyInput | ResidenceCreateManyInput[]
  }

  /**
   * Residence createManyAndReturn
   */
  export type ResidenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * The data used to create many Residences.
     */
    data: ResidenceCreateManyInput | ResidenceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Residence update
   */
  export type ResidenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Residence.
     */
    data: XOR<ResidenceUpdateInput, ResidenceUncheckedUpdateInput>
    /**
     * Choose, which Residence to update.
     */
    where: ResidenceWhereUniqueInput
  }

  /**
   * Residence updateMany
   */
  export type ResidenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Residences.
     */
    data: XOR<ResidenceUpdateManyMutationInput, ResidenceUncheckedUpdateManyInput>
    /**
     * Filter which Residences to update
     */
    where?: ResidenceWhereInput
    /**
     * Limit how many Residences to update.
     */
    limit?: number
  }

  /**
   * Residence updateManyAndReturn
   */
  export type ResidenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * The data used to update Residences.
     */
    data: XOR<ResidenceUpdateManyMutationInput, ResidenceUncheckedUpdateManyInput>
    /**
     * Filter which Residences to update
     */
    where?: ResidenceWhereInput
    /**
     * Limit how many Residences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Residence upsert
   */
  export type ResidenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Residence to update in case it exists.
     */
    where: ResidenceWhereUniqueInput
    /**
     * In case the Residence found by the `where` argument doesn't exist, create a new Residence with this data.
     */
    create: XOR<ResidenceCreateInput, ResidenceUncheckedCreateInput>
    /**
     * In case the Residence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResidenceUpdateInput, ResidenceUncheckedUpdateInput>
  }

  /**
   * Residence delete
   */
  export type ResidenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceInclude<ExtArgs> | null
    /**
     * Filter which Residence to delete.
     */
    where: ResidenceWhereUniqueInput
  }

  /**
   * Residence deleteMany
   */
  export type ResidenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Residences to delete
     */
    where?: ResidenceWhereInput
    /**
     * Limit how many Residences to delete.
     */
    limit?: number
  }

  /**
   * Residence.residents
   */
  export type Residence$residentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    where?: ResidentWhereInput
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    cursor?: ResidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResidentScalarFieldEnum | ResidentScalarFieldEnum[]
  }

  /**
   * Residence.address
   */
  export type Residence$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Residence without action
   */
  export type ResidenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Residence
     */
    select?: ResidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Residence
     */
    omit?: ResidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidenceInclude<ExtArgs> | null
  }


  /**
   * Model Resident
   */

  export type AggregateResident = {
    _count: ResidentCountAggregateOutputType | null
    _avg: ResidentAvgAggregateOutputType | null
    _sum: ResidentSumAggregateOutputType | null
    _min: ResidentMinAggregateOutputType | null
    _max: ResidentMaxAggregateOutputType | null
  }

  export type ResidentAvgAggregateOutputType = {
    id: number | null
    staff_id: number | null
    residence_id: number | null
  }

  export type ResidentSumAggregateOutputType = {
    id: number | null
    staff_id: number | null
    residence_id: number | null
  }

  export type ResidentMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    password: string | null
    staff_id: number | null
    residence_id: number | null
  }

  export type ResidentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    password: string | null
    staff_id: number | null
    residence_id: number | null
  }

  export type ResidentCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    phone: number
    email: number
    password: number
    staff_id: number
    residence_id: number
    _all: number
  }


  export type ResidentAvgAggregateInputType = {
    id?: true
    staff_id?: true
    residence_id?: true
  }

  export type ResidentSumAggregateInputType = {
    id?: true
    staff_id?: true
    residence_id?: true
  }

  export type ResidentMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    phone?: true
    email?: true
    password?: true
    staff_id?: true
    residence_id?: true
  }

  export type ResidentMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    phone?: true
    email?: true
    password?: true
    staff_id?: true
    residence_id?: true
  }

  export type ResidentCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    phone?: true
    email?: true
    password?: true
    staff_id?: true
    residence_id?: true
    _all?: true
  }

  export type ResidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resident to aggregate.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Residents
    **/
    _count?: true | ResidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResidentMaxAggregateInputType
  }

  export type GetResidentAggregateType<T extends ResidentAggregateArgs> = {
        [P in keyof T & keyof AggregateResident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResident[P]>
      : GetScalarType<T[P], AggregateResident[P]>
  }




  export type ResidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidentWhereInput
    orderBy?: ResidentOrderByWithAggregationInput | ResidentOrderByWithAggregationInput[]
    by: ResidentScalarFieldEnum[] | ResidentScalarFieldEnum
    having?: ResidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResidentCountAggregateInputType | true
    _avg?: ResidentAvgAggregateInputType
    _sum?: ResidentSumAggregateInputType
    _min?: ResidentMinAggregateInputType
    _max?: ResidentMaxAggregateInputType
  }

  export type ResidentGroupByOutputType = {
    id: number
    name: string
    lastName: string
    phone: string
    email: string
    password: string
    staff_id: number
    residence_id: number
    _count: ResidentCountAggregateOutputType | null
    _avg: ResidentAvgAggregateOutputType | null
    _sum: ResidentSumAggregateOutputType | null
    _min: ResidentMinAggregateOutputType | null
    _max: ResidentMaxAggregateOutputType | null
  }

  type GetResidentGroupByPayload<T extends ResidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResidentGroupByOutputType[P]>
            : GetScalarType<T[P], ResidentGroupByOutputType[P]>
        }
      >
    >


  export type ResidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    staff_id?: boolean
    residence_id?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    residence?: boolean | ResidenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resident"]>

  export type ResidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    staff_id?: boolean
    residence_id?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    residence?: boolean | ResidenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resident"]>

  export type ResidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    staff_id?: boolean
    residence_id?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    residence?: boolean | ResidenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resident"]>

  export type ResidentSelectScalar = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    staff_id?: boolean
    residence_id?: boolean
  }

  export type ResidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "phone" | "email" | "password" | "staff_id" | "residence_id", ExtArgs["result"]["resident"]>
  export type ResidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    residence?: boolean | ResidenceDefaultArgs<ExtArgs>
  }
  export type ResidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    residence?: boolean | ResidenceDefaultArgs<ExtArgs>
  }
  export type ResidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    residence?: boolean | ResidenceDefaultArgs<ExtArgs>
  }

  export type $ResidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resident"
    objects: {
      staff: Prisma.$StaffPayload<ExtArgs>
      residence: Prisma.$ResidencePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastName: string
      phone: string
      email: string
      password: string
      staff_id: number
      residence_id: number
    }, ExtArgs["result"]["resident"]>
    composites: {}
  }

  type ResidentGetPayload<S extends boolean | null | undefined | ResidentDefaultArgs> = $Result.GetResult<Prisma.$ResidentPayload, S>

  type ResidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResidentCountAggregateInputType | true
    }

  export interface ResidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resident'], meta: { name: 'Resident' } }
    /**
     * Find zero or one Resident that matches the filter.
     * @param {ResidentFindUniqueArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResidentFindUniqueArgs>(args: SelectSubset<T, ResidentFindUniqueArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResidentFindUniqueOrThrowArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResidentFindUniqueOrThrowArgs>(args: SelectSubset<T, ResidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFindFirstArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResidentFindFirstArgs>(args?: SelectSubset<T, ResidentFindFirstArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFindFirstOrThrowArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResidentFindFirstOrThrowArgs>(args?: SelectSubset<T, ResidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Residents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Residents
     * const residents = await prisma.resident.findMany()
     * 
     * // Get first 10 Residents
     * const residents = await prisma.resident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const residentWithIdOnly = await prisma.resident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResidentFindManyArgs>(args?: SelectSubset<T, ResidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resident.
     * @param {ResidentCreateArgs} args - Arguments to create a Resident.
     * @example
     * // Create one Resident
     * const Resident = await prisma.resident.create({
     *   data: {
     *     // ... data to create a Resident
     *   }
     * })
     * 
     */
    create<T extends ResidentCreateArgs>(args: SelectSubset<T, ResidentCreateArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Residents.
     * @param {ResidentCreateManyArgs} args - Arguments to create many Residents.
     * @example
     * // Create many Residents
     * const resident = await prisma.resident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResidentCreateManyArgs>(args?: SelectSubset<T, ResidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Residents and returns the data saved in the database.
     * @param {ResidentCreateManyAndReturnArgs} args - Arguments to create many Residents.
     * @example
     * // Create many Residents
     * const resident = await prisma.resident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Residents and only return the `id`
     * const residentWithIdOnly = await prisma.resident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResidentCreateManyAndReturnArgs>(args?: SelectSubset<T, ResidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resident.
     * @param {ResidentDeleteArgs} args - Arguments to delete one Resident.
     * @example
     * // Delete one Resident
     * const Resident = await prisma.resident.delete({
     *   where: {
     *     // ... filter to delete one Resident
     *   }
     * })
     * 
     */
    delete<T extends ResidentDeleteArgs>(args: SelectSubset<T, ResidentDeleteArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resident.
     * @param {ResidentUpdateArgs} args - Arguments to update one Resident.
     * @example
     * // Update one Resident
     * const resident = await prisma.resident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResidentUpdateArgs>(args: SelectSubset<T, ResidentUpdateArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Residents.
     * @param {ResidentDeleteManyArgs} args - Arguments to filter Residents to delete.
     * @example
     * // Delete a few Residents
     * const { count } = await prisma.resident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResidentDeleteManyArgs>(args?: SelectSubset<T, ResidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Residents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Residents
     * const resident = await prisma.resident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResidentUpdateManyArgs>(args: SelectSubset<T, ResidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Residents and returns the data updated in the database.
     * @param {ResidentUpdateManyAndReturnArgs} args - Arguments to update many Residents.
     * @example
     * // Update many Residents
     * const resident = await prisma.resident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Residents and only return the `id`
     * const residentWithIdOnly = await prisma.resident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResidentUpdateManyAndReturnArgs>(args: SelectSubset<T, ResidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resident.
     * @param {ResidentUpsertArgs} args - Arguments to update or create a Resident.
     * @example
     * // Update or create a Resident
     * const resident = await prisma.resident.upsert({
     *   create: {
     *     // ... data to create a Resident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resident we want to update
     *   }
     * })
     */
    upsert<T extends ResidentUpsertArgs>(args: SelectSubset<T, ResidentUpsertArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Residents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentCountArgs} args - Arguments to filter Residents to count.
     * @example
     * // Count the number of Residents
     * const count = await prisma.resident.count({
     *   where: {
     *     // ... the filter for the Residents we want to count
     *   }
     * })
    **/
    count<T extends ResidentCountArgs>(
      args?: Subset<T, ResidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResidentAggregateArgs>(args: Subset<T, ResidentAggregateArgs>): Prisma.PrismaPromise<GetResidentAggregateType<T>>

    /**
     * Group by Resident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResidentGroupByArgs['orderBy'] }
        : { orderBy?: ResidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resident model
   */
  readonly fields: ResidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    residence<T extends ResidenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResidenceDefaultArgs<ExtArgs>>): Prisma__ResidenceClient<$Result.GetResult<Prisma.$ResidencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resident model
   */
  interface ResidentFieldRefs {
    readonly id: FieldRef<"Resident", 'Int'>
    readonly name: FieldRef<"Resident", 'String'>
    readonly lastName: FieldRef<"Resident", 'String'>
    readonly phone: FieldRef<"Resident", 'String'>
    readonly email: FieldRef<"Resident", 'String'>
    readonly password: FieldRef<"Resident", 'String'>
    readonly staff_id: FieldRef<"Resident", 'Int'>
    readonly residence_id: FieldRef<"Resident", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Resident findUnique
   */
  export type ResidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident findUniqueOrThrow
   */
  export type ResidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident findFirst
   */
  export type ResidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Residents.
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Residents.
     */
    distinct?: ResidentScalarFieldEnum | ResidentScalarFieldEnum[]
  }

  /**
   * Resident findFirstOrThrow
   */
  export type ResidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Residents.
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Residents.
     */
    distinct?: ResidentScalarFieldEnum | ResidentScalarFieldEnum[]
  }

  /**
   * Resident findMany
   */
  export type ResidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Residents to fetch.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Residents.
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    distinct?: ResidentScalarFieldEnum | ResidentScalarFieldEnum[]
  }

  /**
   * Resident create
   */
  export type ResidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Resident.
     */
    data: XOR<ResidentCreateInput, ResidentUncheckedCreateInput>
  }

  /**
   * Resident createMany
   */
  export type ResidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Residents.
     */
    data: ResidentCreateManyInput | ResidentCreateManyInput[]
  }

  /**
   * Resident createManyAndReturn
   */
  export type ResidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * The data used to create many Residents.
     */
    data: ResidentCreateManyInput | ResidentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resident update
   */
  export type ResidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Resident.
     */
    data: XOR<ResidentUpdateInput, ResidentUncheckedUpdateInput>
    /**
     * Choose, which Resident to update.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident updateMany
   */
  export type ResidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Residents.
     */
    data: XOR<ResidentUpdateManyMutationInput, ResidentUncheckedUpdateManyInput>
    /**
     * Filter which Residents to update
     */
    where?: ResidentWhereInput
    /**
     * Limit how many Residents to update.
     */
    limit?: number
  }

  /**
   * Resident updateManyAndReturn
   */
  export type ResidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * The data used to update Residents.
     */
    data: XOR<ResidentUpdateManyMutationInput, ResidentUncheckedUpdateManyInput>
    /**
     * Filter which Residents to update
     */
    where?: ResidentWhereInput
    /**
     * Limit how many Residents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resident upsert
   */
  export type ResidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Resident to update in case it exists.
     */
    where: ResidentWhereUniqueInput
    /**
     * In case the Resident found by the `where` argument doesn't exist, create a new Resident with this data.
     */
    create: XOR<ResidentCreateInput, ResidentUncheckedCreateInput>
    /**
     * In case the Resident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResidentUpdateInput, ResidentUncheckedUpdateInput>
  }

  /**
   * Resident delete
   */
  export type ResidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter which Resident to delete.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident deleteMany
   */
  export type ResidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Residents to delete
     */
    where?: ResidentWhereInput
    /**
     * Limit how many Residents to delete.
     */
    limit?: number
  }

  /**
   * Resident without action
   */
  export type ResidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    id: number | null
    Address_id: number | null
  }

  export type StaffSumAggregateOutputType = {
    id: number | null
    Address_id: number | null
  }

  export type StaffMinAggregateOutputType = {
    id: number | null
    admin_residence: boolean | null
    admin_address: boolean | null
    Address_id: number | null
  }

  export type StaffMaxAggregateOutputType = {
    id: number | null
    admin_residence: boolean | null
    admin_address: boolean | null
    Address_id: number | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    admin_residence: number
    admin_address: number
    Address_id: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    id?: true
    Address_id?: true
  }

  export type StaffSumAggregateInputType = {
    id?: true
    Address_id?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    admin_residence?: true
    admin_address?: true
    Address_id?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    admin_residence?: true
    admin_address?: true
    Address_id?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    admin_residence?: true
    admin_address?: true
    Address_id?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: number
    admin_residence: boolean
    admin_address: boolean
    Address_id: number | null
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_residence?: boolean
    admin_address?: boolean
    Address_id?: boolean
    residentToStaff?: boolean | Staff$residentToStaffArgs<ExtArgs>
    Address?: boolean | Staff$AddressArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_residence?: boolean
    admin_address?: boolean
    Address_id?: boolean
    Address?: boolean | Staff$AddressArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_residence?: boolean
    admin_address?: boolean
    Address_id?: boolean
    Address?: boolean | Staff$AddressArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    admin_residence?: boolean
    admin_address?: boolean
    Address_id?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admin_residence" | "admin_address" | "Address_id", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    residentToStaff?: boolean | Staff$residentToStaffArgs<ExtArgs>
    Address?: boolean | Staff$AddressArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Address?: boolean | Staff$AddressArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Address?: boolean | Staff$AddressArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      residentToStaff: Prisma.$ResidentPayload<ExtArgs> | null
      Address: Prisma.$AddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      admin_residence: boolean
      admin_address: boolean
      Address_id: number | null
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    residentToStaff<T extends Staff$residentToStaffArgs<ExtArgs> = {}>(args?: Subset<T, Staff$residentToStaffArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Address<T extends Staff$AddressArgs<ExtArgs> = {}>(args?: Subset<T, Staff$AddressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'Int'>
    readonly admin_residence: FieldRef<"Staff", 'Boolean'>
    readonly admin_address: FieldRef<"Staff", 'Boolean'>
    readonly Address_id: FieldRef<"Staff", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data?: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.residentToStaff
   */
  export type Staff$residentToStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    where?: ResidentWhereInput
  }

  /**
   * Staff.Address
   */
  export type Staff$AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressScalarFieldEnum: {
    id: 'id',
    street: 'street',
    number: 'number',
    district: 'district',
    city: 'city',
    state: 'state',
    zip_code: 'zip_code'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const ResidenceScalarFieldEnum: {
    id: 'id',
    complement: 'complement',
    address_id: 'address_id'
  };

  export type ResidenceScalarFieldEnum = (typeof ResidenceScalarFieldEnum)[keyof typeof ResidenceScalarFieldEnum]


  export const ResidentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    phone: 'phone',
    email: 'email',
    password: 'password',
    staff_id: 'staff_id',
    residence_id: 'residence_id'
  };

  export type ResidentScalarFieldEnum = (typeof ResidentScalarFieldEnum)[keyof typeof ResidentScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    admin_residence: 'admin_residence',
    admin_address: 'admin_address',
    Address_id: 'Address_id'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zip_code?: StringFilter<"Address"> | string
    residences?: ResidenceListRelationFilter
    staff?: StaffListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    residences?: ResidenceOrderByRelationAggregateInput
    staff?: StaffOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zip_code?: StringFilter<"Address"> | string
    residences?: ResidenceListRelationFilter
    staff?: StaffListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    street?: StringWithAggregatesFilter<"Address"> | string
    number?: StringWithAggregatesFilter<"Address"> | string
    district?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    zip_code?: StringWithAggregatesFilter<"Address"> | string
  }

  export type ResidenceWhereInput = {
    AND?: ResidenceWhereInput | ResidenceWhereInput[]
    OR?: ResidenceWhereInput[]
    NOT?: ResidenceWhereInput | ResidenceWhereInput[]
    id?: IntFilter<"Residence"> | number
    complement?: StringFilter<"Residence"> | string
    address_id?: IntFilter<"Residence"> | number
    residents?: ResidentListRelationFilter
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }

  export type ResidenceOrderByWithRelationInput = {
    id?: SortOrder
    complement?: SortOrder
    address_id?: SortOrder
    residents?: ResidentOrderByRelationAggregateInput
    address?: AddressOrderByWithRelationInput
  }

  export type ResidenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    complement?: string
    AND?: ResidenceWhereInput | ResidenceWhereInput[]
    OR?: ResidenceWhereInput[]
    NOT?: ResidenceWhereInput | ResidenceWhereInput[]
    address_id?: IntFilter<"Residence"> | number
    residents?: ResidentListRelationFilter
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }, "id" | "complement">

  export type ResidenceOrderByWithAggregationInput = {
    id?: SortOrder
    complement?: SortOrder
    address_id?: SortOrder
    _count?: ResidenceCountOrderByAggregateInput
    _avg?: ResidenceAvgOrderByAggregateInput
    _max?: ResidenceMaxOrderByAggregateInput
    _min?: ResidenceMinOrderByAggregateInput
    _sum?: ResidenceSumOrderByAggregateInput
  }

  export type ResidenceScalarWhereWithAggregatesInput = {
    AND?: ResidenceScalarWhereWithAggregatesInput | ResidenceScalarWhereWithAggregatesInput[]
    OR?: ResidenceScalarWhereWithAggregatesInput[]
    NOT?: ResidenceScalarWhereWithAggregatesInput | ResidenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Residence"> | number
    complement?: StringWithAggregatesFilter<"Residence"> | string
    address_id?: IntWithAggregatesFilter<"Residence"> | number
  }

  export type ResidentWhereInput = {
    AND?: ResidentWhereInput | ResidentWhereInput[]
    OR?: ResidentWhereInput[]
    NOT?: ResidentWhereInput | ResidentWhereInput[]
    id?: IntFilter<"Resident"> | number
    name?: StringFilter<"Resident"> | string
    lastName?: StringFilter<"Resident"> | string
    phone?: StringFilter<"Resident"> | string
    email?: StringFilter<"Resident"> | string
    password?: StringFilter<"Resident"> | string
    staff_id?: IntFilter<"Resident"> | number
    residence_id?: IntFilter<"Resident"> | number
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    residence?: XOR<ResidenceScalarRelationFilter, ResidenceWhereInput>
  }

  export type ResidentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    staff_id?: SortOrder
    residence_id?: SortOrder
    staff?: StaffOrderByWithRelationInput
    residence?: ResidenceOrderByWithRelationInput
  }

  export type ResidentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    staff_id?: number
    AND?: ResidentWhereInput | ResidentWhereInput[]
    OR?: ResidentWhereInput[]
    NOT?: ResidentWhereInput | ResidentWhereInput[]
    name?: StringFilter<"Resident"> | string
    lastName?: StringFilter<"Resident"> | string
    phone?: StringFilter<"Resident"> | string
    password?: StringFilter<"Resident"> | string
    residence_id?: IntFilter<"Resident"> | number
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    residence?: XOR<ResidenceScalarRelationFilter, ResidenceWhereInput>
  }, "id" | "email" | "staff_id">

  export type ResidentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    staff_id?: SortOrder
    residence_id?: SortOrder
    _count?: ResidentCountOrderByAggregateInput
    _avg?: ResidentAvgOrderByAggregateInput
    _max?: ResidentMaxOrderByAggregateInput
    _min?: ResidentMinOrderByAggregateInput
    _sum?: ResidentSumOrderByAggregateInput
  }

  export type ResidentScalarWhereWithAggregatesInput = {
    AND?: ResidentScalarWhereWithAggregatesInput | ResidentScalarWhereWithAggregatesInput[]
    OR?: ResidentScalarWhereWithAggregatesInput[]
    NOT?: ResidentScalarWhereWithAggregatesInput | ResidentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resident"> | number
    name?: StringWithAggregatesFilter<"Resident"> | string
    lastName?: StringWithAggregatesFilter<"Resident"> | string
    phone?: StringWithAggregatesFilter<"Resident"> | string
    email?: StringWithAggregatesFilter<"Resident"> | string
    password?: StringWithAggregatesFilter<"Resident"> | string
    staff_id?: IntWithAggregatesFilter<"Resident"> | number
    residence_id?: IntWithAggregatesFilter<"Resident"> | number
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: IntFilter<"Staff"> | number
    admin_residence?: BoolFilter<"Staff"> | boolean
    admin_address?: BoolFilter<"Staff"> | boolean
    Address_id?: IntNullableFilter<"Staff"> | number | null
    residentToStaff?: XOR<ResidentNullableScalarRelationFilter, ResidentWhereInput> | null
    Address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    admin_residence?: SortOrder
    admin_address?: SortOrder
    Address_id?: SortOrderInput | SortOrder
    residentToStaff?: ResidentOrderByWithRelationInput
    Address?: AddressOrderByWithRelationInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    admin_residence?: BoolFilter<"Staff"> | boolean
    admin_address?: BoolFilter<"Staff"> | boolean
    Address_id?: IntNullableFilter<"Staff"> | number | null
    residentToStaff?: XOR<ResidentNullableScalarRelationFilter, ResidentWhereInput> | null
    Address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }, "id">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    admin_residence?: SortOrder
    admin_address?: SortOrder
    Address_id?: SortOrderInput | SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Staff"> | number
    admin_residence?: BoolWithAggregatesFilter<"Staff"> | boolean
    admin_address?: BoolWithAggregatesFilter<"Staff"> | boolean
    Address_id?: IntNullableWithAggregatesFilter<"Staff"> | number | null
  }

  export type AddressCreateInput = {
    street: string
    number: string
    district: string
    city: string
    state: string
    zip_code: string
    residences?: ResidenceCreateNestedManyWithoutAddressInput
    staff?: StaffCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    street: string
    number: string
    district: string
    city: string
    state: string
    zip_code: string
    residences?: ResidenceUncheckedCreateNestedManyWithoutAddressInput
    staff?: StaffUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    residences?: ResidenceUpdateManyWithoutAddressNestedInput
    staff?: StaffUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    residences?: ResidenceUncheckedUpdateManyWithoutAddressNestedInput
    staff?: StaffUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    street: string
    number: string
    district: string
    city: string
    state: string
    zip_code: string
  }

  export type AddressUpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
  }

  export type ResidenceCreateInput = {
    complement: string
    residents?: ResidentCreateNestedManyWithoutResidenceInput
    address?: AddressCreateNestedOneWithoutResidencesInput
  }

  export type ResidenceUncheckedCreateInput = {
    id?: number
    complement: string
    address_id: number
    residents?: ResidentUncheckedCreateNestedManyWithoutResidenceInput
  }

  export type ResidenceUpdateInput = {
    complement?: StringFieldUpdateOperationsInput | string
    residents?: ResidentUpdateManyWithoutResidenceNestedInput
    address?: AddressUpdateOneWithoutResidencesNestedInput
  }

  export type ResidenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    residents?: ResidentUncheckedUpdateManyWithoutResidenceNestedInput
  }

  export type ResidenceCreateManyInput = {
    id?: number
    complement: string
    address_id: number
  }

  export type ResidenceUpdateManyMutationInput = {
    complement?: StringFieldUpdateOperationsInput | string
  }

  export type ResidenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResidentCreateInput = {
    name: string
    lastName: string
    phone: string
    email: string
    password: string
    staff: StaffCreateNestedOneWithoutResidentToStaffInput
    residence: ResidenceCreateNestedOneWithoutResidentsInput
  }

  export type ResidentUncheckedCreateInput = {
    id?: number
    name: string
    lastName: string
    phone: string
    email: string
    password: string
    staff_id: number
    residence_id: number
  }

  export type ResidentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    staff?: StaffUpdateOneRequiredWithoutResidentToStaffNestedInput
    residence?: ResidenceUpdateOneRequiredWithoutResidentsNestedInput
  }

  export type ResidentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    staff_id?: IntFieldUpdateOperationsInput | number
    residence_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResidentCreateManyInput = {
    id?: number
    name: string
    lastName: string
    phone: string
    email: string
    password: string
    staff_id: number
    residence_id: number
  }

  export type ResidentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ResidentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    staff_id?: IntFieldUpdateOperationsInput | number
    residence_id?: IntFieldUpdateOperationsInput | number
  }

  export type StaffCreateInput = {
    admin_residence?: boolean
    admin_address?: boolean
    residentToStaff?: ResidentCreateNestedOneWithoutStaffInput
    Address?: AddressCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: number
    admin_residence?: boolean
    admin_address?: boolean
    Address_id?: number | null
    residentToStaff?: ResidentUncheckedCreateNestedOneWithoutStaffInput
  }

  export type StaffUpdateInput = {
    admin_residence?: BoolFieldUpdateOperationsInput | boolean
    admin_address?: BoolFieldUpdateOperationsInput | boolean
    residentToStaff?: ResidentUpdateOneWithoutStaffNestedInput
    Address?: AddressUpdateOneWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_residence?: BoolFieldUpdateOperationsInput | boolean
    admin_address?: BoolFieldUpdateOperationsInput | boolean
    Address_id?: NullableIntFieldUpdateOperationsInput | number | null
    residentToStaff?: ResidentUncheckedUpdateOneWithoutStaffNestedInput
  }

  export type StaffCreateManyInput = {
    id?: number
    admin_residence?: boolean
    admin_address?: boolean
    Address_id?: number | null
  }

  export type StaffUpdateManyMutationInput = {
    admin_residence?: BoolFieldUpdateOperationsInput | boolean
    admin_address?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_residence?: BoolFieldUpdateOperationsInput | boolean
    admin_address?: BoolFieldUpdateOperationsInput | boolean
    Address_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ResidenceListRelationFilter = {
    every?: ResidenceWhereInput
    some?: ResidenceWhereInput
    none?: ResidenceWhereInput
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type ResidenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ResidentListRelationFilter = {
    every?: ResidentWhereInput
    some?: ResidentWhereInput
    none?: ResidentWhereInput
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type ResidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResidenceCountOrderByAggregateInput = {
    id?: SortOrder
    complement?: SortOrder
    address_id?: SortOrder
  }

  export type ResidenceAvgOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
  }

  export type ResidenceMaxOrderByAggregateInput = {
    id?: SortOrder
    complement?: SortOrder
    address_id?: SortOrder
  }

  export type ResidenceMinOrderByAggregateInput = {
    id?: SortOrder
    complement?: SortOrder
    address_id?: SortOrder
  }

  export type ResidenceSumOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput
    isNot?: StaffWhereInput
  }

  export type ResidenceScalarRelationFilter = {
    is?: ResidenceWhereInput
    isNot?: ResidenceWhereInput
  }

  export type ResidentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    staff_id?: SortOrder
    residence_id?: SortOrder
  }

  export type ResidentAvgOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    residence_id?: SortOrder
  }

  export type ResidentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    staff_id?: SortOrder
    residence_id?: SortOrder
  }

  export type ResidentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    staff_id?: SortOrder
    residence_id?: SortOrder
  }

  export type ResidentSumOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    residence_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ResidentNullableScalarRelationFilter = {
    is?: ResidentWhereInput | null
    isNot?: ResidentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    admin_residence?: SortOrder
    admin_address?: SortOrder
    Address_id?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    id?: SortOrder
    Address_id?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    admin_residence?: SortOrder
    admin_address?: SortOrder
    Address_id?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    admin_residence?: SortOrder
    admin_address?: SortOrder
    Address_id?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    id?: SortOrder
    Address_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ResidenceCreateNestedManyWithoutAddressInput = {
    create?: XOR<ResidenceCreateWithoutAddressInput, ResidenceUncheckedCreateWithoutAddressInput> | ResidenceCreateWithoutAddressInput[] | ResidenceUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ResidenceCreateOrConnectWithoutAddressInput | ResidenceCreateOrConnectWithoutAddressInput[]
    createMany?: ResidenceCreateManyAddressInputEnvelope
    connect?: ResidenceWhereUniqueInput | ResidenceWhereUniqueInput[]
  }

  export type StaffCreateNestedManyWithoutAddressInput = {
    create?: XOR<StaffCreateWithoutAddressInput, StaffUncheckedCreateWithoutAddressInput> | StaffCreateWithoutAddressInput[] | StaffUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAddressInput | StaffCreateOrConnectWithoutAddressInput[]
    createMany?: StaffCreateManyAddressInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type ResidenceUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<ResidenceCreateWithoutAddressInput, ResidenceUncheckedCreateWithoutAddressInput> | ResidenceCreateWithoutAddressInput[] | ResidenceUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ResidenceCreateOrConnectWithoutAddressInput | ResidenceCreateOrConnectWithoutAddressInput[]
    createMany?: ResidenceCreateManyAddressInputEnvelope
    connect?: ResidenceWhereUniqueInput | ResidenceWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<StaffCreateWithoutAddressInput, StaffUncheckedCreateWithoutAddressInput> | StaffCreateWithoutAddressInput[] | StaffUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAddressInput | StaffCreateOrConnectWithoutAddressInput[]
    createMany?: StaffCreateManyAddressInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ResidenceUpdateManyWithoutAddressNestedInput = {
    create?: XOR<ResidenceCreateWithoutAddressInput, ResidenceUncheckedCreateWithoutAddressInput> | ResidenceCreateWithoutAddressInput[] | ResidenceUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ResidenceCreateOrConnectWithoutAddressInput | ResidenceCreateOrConnectWithoutAddressInput[]
    upsert?: ResidenceUpsertWithWhereUniqueWithoutAddressInput | ResidenceUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: ResidenceCreateManyAddressInputEnvelope
    set?: ResidenceWhereUniqueInput | ResidenceWhereUniqueInput[]
    disconnect?: ResidenceWhereUniqueInput | ResidenceWhereUniqueInput[]
    delete?: ResidenceWhereUniqueInput | ResidenceWhereUniqueInput[]
    connect?: ResidenceWhereUniqueInput | ResidenceWhereUniqueInput[]
    update?: ResidenceUpdateWithWhereUniqueWithoutAddressInput | ResidenceUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: ResidenceUpdateManyWithWhereWithoutAddressInput | ResidenceUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: ResidenceScalarWhereInput | ResidenceScalarWhereInput[]
  }

  export type StaffUpdateManyWithoutAddressNestedInput = {
    create?: XOR<StaffCreateWithoutAddressInput, StaffUncheckedCreateWithoutAddressInput> | StaffCreateWithoutAddressInput[] | StaffUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAddressInput | StaffCreateOrConnectWithoutAddressInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutAddressInput | StaffUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: StaffCreateManyAddressInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutAddressInput | StaffUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutAddressInput | StaffUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResidenceUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<ResidenceCreateWithoutAddressInput, ResidenceUncheckedCreateWithoutAddressInput> | ResidenceCreateWithoutAddressInput[] | ResidenceUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ResidenceCreateOrConnectWithoutAddressInput | ResidenceCreateOrConnectWithoutAddressInput[]
    upsert?: ResidenceUpsertWithWhereUniqueWithoutAddressInput | ResidenceUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: ResidenceCreateManyAddressInputEnvelope
    set?: ResidenceWhereUniqueInput | ResidenceWhereUniqueInput[]
    disconnect?: ResidenceWhereUniqueInput | ResidenceWhereUniqueInput[]
    delete?: ResidenceWhereUniqueInput | ResidenceWhereUniqueInput[]
    connect?: ResidenceWhereUniqueInput | ResidenceWhereUniqueInput[]
    update?: ResidenceUpdateWithWhereUniqueWithoutAddressInput | ResidenceUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: ResidenceUpdateManyWithWhereWithoutAddressInput | ResidenceUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: ResidenceScalarWhereInput | ResidenceScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<StaffCreateWithoutAddressInput, StaffUncheckedCreateWithoutAddressInput> | StaffCreateWithoutAddressInput[] | StaffUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAddressInput | StaffCreateOrConnectWithoutAddressInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutAddressInput | StaffUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: StaffCreateManyAddressInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutAddressInput | StaffUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutAddressInput | StaffUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type ResidentCreateNestedManyWithoutResidenceInput = {
    create?: XOR<ResidentCreateWithoutResidenceInput, ResidentUncheckedCreateWithoutResidenceInput> | ResidentCreateWithoutResidenceInput[] | ResidentUncheckedCreateWithoutResidenceInput[]
    connectOrCreate?: ResidentCreateOrConnectWithoutResidenceInput | ResidentCreateOrConnectWithoutResidenceInput[]
    createMany?: ResidentCreateManyResidenceInputEnvelope
    connect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
  }

  export type AddressCreateNestedOneWithoutResidencesInput = {
    create?: XOR<AddressCreateWithoutResidencesInput, AddressUncheckedCreateWithoutResidencesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutResidencesInput
    connect?: AddressWhereUniqueInput
  }

  export type ResidentUncheckedCreateNestedManyWithoutResidenceInput = {
    create?: XOR<ResidentCreateWithoutResidenceInput, ResidentUncheckedCreateWithoutResidenceInput> | ResidentCreateWithoutResidenceInput[] | ResidentUncheckedCreateWithoutResidenceInput[]
    connectOrCreate?: ResidentCreateOrConnectWithoutResidenceInput | ResidentCreateOrConnectWithoutResidenceInput[]
    createMany?: ResidentCreateManyResidenceInputEnvelope
    connect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
  }

  export type ResidentUpdateManyWithoutResidenceNestedInput = {
    create?: XOR<ResidentCreateWithoutResidenceInput, ResidentUncheckedCreateWithoutResidenceInput> | ResidentCreateWithoutResidenceInput[] | ResidentUncheckedCreateWithoutResidenceInput[]
    connectOrCreate?: ResidentCreateOrConnectWithoutResidenceInput | ResidentCreateOrConnectWithoutResidenceInput[]
    upsert?: ResidentUpsertWithWhereUniqueWithoutResidenceInput | ResidentUpsertWithWhereUniqueWithoutResidenceInput[]
    createMany?: ResidentCreateManyResidenceInputEnvelope
    set?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    disconnect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    delete?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    connect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    update?: ResidentUpdateWithWhereUniqueWithoutResidenceInput | ResidentUpdateWithWhereUniqueWithoutResidenceInput[]
    updateMany?: ResidentUpdateManyWithWhereWithoutResidenceInput | ResidentUpdateManyWithWhereWithoutResidenceInput[]
    deleteMany?: ResidentScalarWhereInput | ResidentScalarWhereInput[]
  }

  export type AddressUpdateOneWithoutResidencesNestedInput = {
    create?: XOR<AddressCreateWithoutResidencesInput, AddressUncheckedCreateWithoutResidencesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutResidencesInput
    upsert?: AddressUpsertWithoutResidencesInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutResidencesInput, AddressUpdateWithoutResidencesInput>, AddressUncheckedUpdateWithoutResidencesInput>
  }

  export type ResidentUncheckedUpdateManyWithoutResidenceNestedInput = {
    create?: XOR<ResidentCreateWithoutResidenceInput, ResidentUncheckedCreateWithoutResidenceInput> | ResidentCreateWithoutResidenceInput[] | ResidentUncheckedCreateWithoutResidenceInput[]
    connectOrCreate?: ResidentCreateOrConnectWithoutResidenceInput | ResidentCreateOrConnectWithoutResidenceInput[]
    upsert?: ResidentUpsertWithWhereUniqueWithoutResidenceInput | ResidentUpsertWithWhereUniqueWithoutResidenceInput[]
    createMany?: ResidentCreateManyResidenceInputEnvelope
    set?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    disconnect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    delete?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    connect?: ResidentWhereUniqueInput | ResidentWhereUniqueInput[]
    update?: ResidentUpdateWithWhereUniqueWithoutResidenceInput | ResidentUpdateWithWhereUniqueWithoutResidenceInput[]
    updateMany?: ResidentUpdateManyWithWhereWithoutResidenceInput | ResidentUpdateManyWithWhereWithoutResidenceInput[]
    deleteMany?: ResidentScalarWhereInput | ResidentScalarWhereInput[]
  }

  export type StaffCreateNestedOneWithoutResidentToStaffInput = {
    create?: XOR<StaffCreateWithoutResidentToStaffInput, StaffUncheckedCreateWithoutResidentToStaffInput>
    connectOrCreate?: StaffCreateOrConnectWithoutResidentToStaffInput
    connect?: StaffWhereUniqueInput
  }

  export type ResidenceCreateNestedOneWithoutResidentsInput = {
    create?: XOR<ResidenceCreateWithoutResidentsInput, ResidenceUncheckedCreateWithoutResidentsInput>
    connectOrCreate?: ResidenceCreateOrConnectWithoutResidentsInput
    connect?: ResidenceWhereUniqueInput
  }

  export type StaffUpdateOneRequiredWithoutResidentToStaffNestedInput = {
    create?: XOR<StaffCreateWithoutResidentToStaffInput, StaffUncheckedCreateWithoutResidentToStaffInput>
    connectOrCreate?: StaffCreateOrConnectWithoutResidentToStaffInput
    upsert?: StaffUpsertWithoutResidentToStaffInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutResidentToStaffInput, StaffUpdateWithoutResidentToStaffInput>, StaffUncheckedUpdateWithoutResidentToStaffInput>
  }

  export type ResidenceUpdateOneRequiredWithoutResidentsNestedInput = {
    create?: XOR<ResidenceCreateWithoutResidentsInput, ResidenceUncheckedCreateWithoutResidentsInput>
    connectOrCreate?: ResidenceCreateOrConnectWithoutResidentsInput
    upsert?: ResidenceUpsertWithoutResidentsInput
    connect?: ResidenceWhereUniqueInput
    update?: XOR<XOR<ResidenceUpdateToOneWithWhereWithoutResidentsInput, ResidenceUpdateWithoutResidentsInput>, ResidenceUncheckedUpdateWithoutResidentsInput>
  }

  export type ResidentCreateNestedOneWithoutStaffInput = {
    create?: XOR<ResidentCreateWithoutStaffInput, ResidentUncheckedCreateWithoutStaffInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutStaffInput
    connect?: ResidentWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutStaffInput = {
    create?: XOR<AddressCreateWithoutStaffInput, AddressUncheckedCreateWithoutStaffInput>
    connectOrCreate?: AddressCreateOrConnectWithoutStaffInput
    connect?: AddressWhereUniqueInput
  }

  export type ResidentUncheckedCreateNestedOneWithoutStaffInput = {
    create?: XOR<ResidentCreateWithoutStaffInput, ResidentUncheckedCreateWithoutStaffInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutStaffInput
    connect?: ResidentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ResidentUpdateOneWithoutStaffNestedInput = {
    create?: XOR<ResidentCreateWithoutStaffInput, ResidentUncheckedCreateWithoutStaffInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutStaffInput
    upsert?: ResidentUpsertWithoutStaffInput
    disconnect?: ResidentWhereInput | boolean
    delete?: ResidentWhereInput | boolean
    connect?: ResidentWhereUniqueInput
    update?: XOR<XOR<ResidentUpdateToOneWithWhereWithoutStaffInput, ResidentUpdateWithoutStaffInput>, ResidentUncheckedUpdateWithoutStaffInput>
  }

  export type AddressUpdateOneWithoutStaffNestedInput = {
    create?: XOR<AddressCreateWithoutStaffInput, AddressUncheckedCreateWithoutStaffInput>
    connectOrCreate?: AddressCreateOrConnectWithoutStaffInput
    upsert?: AddressUpsertWithoutStaffInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutStaffInput, AddressUpdateWithoutStaffInput>, AddressUncheckedUpdateWithoutStaffInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResidentUncheckedUpdateOneWithoutStaffNestedInput = {
    create?: XOR<ResidentCreateWithoutStaffInput, ResidentUncheckedCreateWithoutStaffInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutStaffInput
    upsert?: ResidentUpsertWithoutStaffInput
    disconnect?: ResidentWhereInput | boolean
    delete?: ResidentWhereInput | boolean
    connect?: ResidentWhereUniqueInput
    update?: XOR<XOR<ResidentUpdateToOneWithWhereWithoutStaffInput, ResidentUpdateWithoutStaffInput>, ResidentUncheckedUpdateWithoutStaffInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ResidenceCreateWithoutAddressInput = {
    complement: string
    residents?: ResidentCreateNestedManyWithoutResidenceInput
  }

  export type ResidenceUncheckedCreateWithoutAddressInput = {
    id?: number
    complement: string
    residents?: ResidentUncheckedCreateNestedManyWithoutResidenceInput
  }

  export type ResidenceCreateOrConnectWithoutAddressInput = {
    where: ResidenceWhereUniqueInput
    create: XOR<ResidenceCreateWithoutAddressInput, ResidenceUncheckedCreateWithoutAddressInput>
  }

  export type ResidenceCreateManyAddressInputEnvelope = {
    data: ResidenceCreateManyAddressInput | ResidenceCreateManyAddressInput[]
  }

  export type StaffCreateWithoutAddressInput = {
    admin_residence?: boolean
    admin_address?: boolean
    residentToStaff?: ResidentCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutAddressInput = {
    id?: number
    admin_residence?: boolean
    admin_address?: boolean
    residentToStaff?: ResidentUncheckedCreateNestedOneWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutAddressInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutAddressInput, StaffUncheckedCreateWithoutAddressInput>
  }

  export type StaffCreateManyAddressInputEnvelope = {
    data: StaffCreateManyAddressInput | StaffCreateManyAddressInput[]
  }

  export type ResidenceUpsertWithWhereUniqueWithoutAddressInput = {
    where: ResidenceWhereUniqueInput
    update: XOR<ResidenceUpdateWithoutAddressInput, ResidenceUncheckedUpdateWithoutAddressInput>
    create: XOR<ResidenceCreateWithoutAddressInput, ResidenceUncheckedCreateWithoutAddressInput>
  }

  export type ResidenceUpdateWithWhereUniqueWithoutAddressInput = {
    where: ResidenceWhereUniqueInput
    data: XOR<ResidenceUpdateWithoutAddressInput, ResidenceUncheckedUpdateWithoutAddressInput>
  }

  export type ResidenceUpdateManyWithWhereWithoutAddressInput = {
    where: ResidenceScalarWhereInput
    data: XOR<ResidenceUpdateManyMutationInput, ResidenceUncheckedUpdateManyWithoutAddressInput>
  }

  export type ResidenceScalarWhereInput = {
    AND?: ResidenceScalarWhereInput | ResidenceScalarWhereInput[]
    OR?: ResidenceScalarWhereInput[]
    NOT?: ResidenceScalarWhereInput | ResidenceScalarWhereInput[]
    id?: IntFilter<"Residence"> | number
    complement?: StringFilter<"Residence"> | string
    address_id?: IntFilter<"Residence"> | number
  }

  export type StaffUpsertWithWhereUniqueWithoutAddressInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutAddressInput, StaffUncheckedUpdateWithoutAddressInput>
    create: XOR<StaffCreateWithoutAddressInput, StaffUncheckedCreateWithoutAddressInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutAddressInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutAddressInput, StaffUncheckedUpdateWithoutAddressInput>
  }

  export type StaffUpdateManyWithWhereWithoutAddressInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutAddressInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    id?: IntFilter<"Staff"> | number
    admin_residence?: BoolFilter<"Staff"> | boolean
    admin_address?: BoolFilter<"Staff"> | boolean
    Address_id?: IntNullableFilter<"Staff"> | number | null
  }

  export type ResidentCreateWithoutResidenceInput = {
    name: string
    lastName: string
    phone: string
    email: string
    password: string
    staff: StaffCreateNestedOneWithoutResidentToStaffInput
  }

  export type ResidentUncheckedCreateWithoutResidenceInput = {
    id?: number
    name: string
    lastName: string
    phone: string
    email: string
    password: string
    staff_id: number
  }

  export type ResidentCreateOrConnectWithoutResidenceInput = {
    where: ResidentWhereUniqueInput
    create: XOR<ResidentCreateWithoutResidenceInput, ResidentUncheckedCreateWithoutResidenceInput>
  }

  export type ResidentCreateManyResidenceInputEnvelope = {
    data: ResidentCreateManyResidenceInput | ResidentCreateManyResidenceInput[]
  }

  export type AddressCreateWithoutResidencesInput = {
    street: string
    number: string
    district: string
    city: string
    state: string
    zip_code: string
    staff?: StaffCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutResidencesInput = {
    id?: number
    street: string
    number: string
    district: string
    city: string
    state: string
    zip_code: string
    staff?: StaffUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutResidencesInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutResidencesInput, AddressUncheckedCreateWithoutResidencesInput>
  }

  export type ResidentUpsertWithWhereUniqueWithoutResidenceInput = {
    where: ResidentWhereUniqueInput
    update: XOR<ResidentUpdateWithoutResidenceInput, ResidentUncheckedUpdateWithoutResidenceInput>
    create: XOR<ResidentCreateWithoutResidenceInput, ResidentUncheckedCreateWithoutResidenceInput>
  }

  export type ResidentUpdateWithWhereUniqueWithoutResidenceInput = {
    where: ResidentWhereUniqueInput
    data: XOR<ResidentUpdateWithoutResidenceInput, ResidentUncheckedUpdateWithoutResidenceInput>
  }

  export type ResidentUpdateManyWithWhereWithoutResidenceInput = {
    where: ResidentScalarWhereInput
    data: XOR<ResidentUpdateManyMutationInput, ResidentUncheckedUpdateManyWithoutResidenceInput>
  }

  export type ResidentScalarWhereInput = {
    AND?: ResidentScalarWhereInput | ResidentScalarWhereInput[]
    OR?: ResidentScalarWhereInput[]
    NOT?: ResidentScalarWhereInput | ResidentScalarWhereInput[]
    id?: IntFilter<"Resident"> | number
    name?: StringFilter<"Resident"> | string
    lastName?: StringFilter<"Resident"> | string
    phone?: StringFilter<"Resident"> | string
    email?: StringFilter<"Resident"> | string
    password?: StringFilter<"Resident"> | string
    staff_id?: IntFilter<"Resident"> | number
    residence_id?: IntFilter<"Resident"> | number
  }

  export type AddressUpsertWithoutResidencesInput = {
    update: XOR<AddressUpdateWithoutResidencesInput, AddressUncheckedUpdateWithoutResidencesInput>
    create: XOR<AddressCreateWithoutResidencesInput, AddressUncheckedCreateWithoutResidencesInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutResidencesInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutResidencesInput, AddressUncheckedUpdateWithoutResidencesInput>
  }

  export type AddressUpdateWithoutResidencesInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    staff?: StaffUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutResidencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    staff?: StaffUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type StaffCreateWithoutResidentToStaffInput = {
    admin_residence?: boolean
    admin_address?: boolean
    Address?: AddressCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutResidentToStaffInput = {
    id?: number
    admin_residence?: boolean
    admin_address?: boolean
    Address_id?: number | null
  }

  export type StaffCreateOrConnectWithoutResidentToStaffInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutResidentToStaffInput, StaffUncheckedCreateWithoutResidentToStaffInput>
  }

  export type ResidenceCreateWithoutResidentsInput = {
    complement: string
    address?: AddressCreateNestedOneWithoutResidencesInput
  }

  export type ResidenceUncheckedCreateWithoutResidentsInput = {
    id?: number
    complement: string
    address_id: number
  }

  export type ResidenceCreateOrConnectWithoutResidentsInput = {
    where: ResidenceWhereUniqueInput
    create: XOR<ResidenceCreateWithoutResidentsInput, ResidenceUncheckedCreateWithoutResidentsInput>
  }

  export type StaffUpsertWithoutResidentToStaffInput = {
    update: XOR<StaffUpdateWithoutResidentToStaffInput, StaffUncheckedUpdateWithoutResidentToStaffInput>
    create: XOR<StaffCreateWithoutResidentToStaffInput, StaffUncheckedCreateWithoutResidentToStaffInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutResidentToStaffInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutResidentToStaffInput, StaffUncheckedUpdateWithoutResidentToStaffInput>
  }

  export type StaffUpdateWithoutResidentToStaffInput = {
    admin_residence?: BoolFieldUpdateOperationsInput | boolean
    admin_address?: BoolFieldUpdateOperationsInput | boolean
    Address?: AddressUpdateOneWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutResidentToStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_residence?: BoolFieldUpdateOperationsInput | boolean
    admin_address?: BoolFieldUpdateOperationsInput | boolean
    Address_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResidenceUpsertWithoutResidentsInput = {
    update: XOR<ResidenceUpdateWithoutResidentsInput, ResidenceUncheckedUpdateWithoutResidentsInput>
    create: XOR<ResidenceCreateWithoutResidentsInput, ResidenceUncheckedCreateWithoutResidentsInput>
    where?: ResidenceWhereInput
  }

  export type ResidenceUpdateToOneWithWhereWithoutResidentsInput = {
    where?: ResidenceWhereInput
    data: XOR<ResidenceUpdateWithoutResidentsInput, ResidenceUncheckedUpdateWithoutResidentsInput>
  }

  export type ResidenceUpdateWithoutResidentsInput = {
    complement?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutResidencesNestedInput
  }

  export type ResidenceUncheckedUpdateWithoutResidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResidentCreateWithoutStaffInput = {
    name: string
    lastName: string
    phone: string
    email: string
    password: string
    residence: ResidenceCreateNestedOneWithoutResidentsInput
  }

  export type ResidentUncheckedCreateWithoutStaffInput = {
    id?: number
    name: string
    lastName: string
    phone: string
    email: string
    password: string
    residence_id: number
  }

  export type ResidentCreateOrConnectWithoutStaffInput = {
    where: ResidentWhereUniqueInput
    create: XOR<ResidentCreateWithoutStaffInput, ResidentUncheckedCreateWithoutStaffInput>
  }

  export type AddressCreateWithoutStaffInput = {
    street: string
    number: string
    district: string
    city: string
    state: string
    zip_code: string
    residences?: ResidenceCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutStaffInput = {
    id?: number
    street: string
    number: string
    district: string
    city: string
    state: string
    zip_code: string
    residences?: ResidenceUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutStaffInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutStaffInput, AddressUncheckedCreateWithoutStaffInput>
  }

  export type ResidentUpsertWithoutStaffInput = {
    update: XOR<ResidentUpdateWithoutStaffInput, ResidentUncheckedUpdateWithoutStaffInput>
    create: XOR<ResidentCreateWithoutStaffInput, ResidentUncheckedCreateWithoutStaffInput>
    where?: ResidentWhereInput
  }

  export type ResidentUpdateToOneWithWhereWithoutStaffInput = {
    where?: ResidentWhereInput
    data: XOR<ResidentUpdateWithoutStaffInput, ResidentUncheckedUpdateWithoutStaffInput>
  }

  export type ResidentUpdateWithoutStaffInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    residence?: ResidenceUpdateOneRequiredWithoutResidentsNestedInput
  }

  export type ResidentUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    residence_id?: IntFieldUpdateOperationsInput | number
  }

  export type AddressUpsertWithoutStaffInput = {
    update: XOR<AddressUpdateWithoutStaffInput, AddressUncheckedUpdateWithoutStaffInput>
    create: XOR<AddressCreateWithoutStaffInput, AddressUncheckedCreateWithoutStaffInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutStaffInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutStaffInput, AddressUncheckedUpdateWithoutStaffInput>
  }

  export type AddressUpdateWithoutStaffInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    residences?: ResidenceUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    residences?: ResidenceUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type ResidenceCreateManyAddressInput = {
    id?: number
    complement: string
  }

  export type StaffCreateManyAddressInput = {
    id?: number
    admin_residence?: boolean
    admin_address?: boolean
  }

  export type ResidenceUpdateWithoutAddressInput = {
    complement?: StringFieldUpdateOperationsInput | string
    residents?: ResidentUpdateManyWithoutResidenceNestedInput
  }

  export type ResidenceUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
    residents?: ResidentUncheckedUpdateManyWithoutResidenceNestedInput
  }

  export type ResidenceUncheckedUpdateManyWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
  }

  export type StaffUpdateWithoutAddressInput = {
    admin_residence?: BoolFieldUpdateOperationsInput | boolean
    admin_address?: BoolFieldUpdateOperationsInput | boolean
    residentToStaff?: ResidentUpdateOneWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_residence?: BoolFieldUpdateOperationsInput | boolean
    admin_address?: BoolFieldUpdateOperationsInput | boolean
    residentToStaff?: ResidentUncheckedUpdateOneWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateManyWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_residence?: BoolFieldUpdateOperationsInput | boolean
    admin_address?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResidentCreateManyResidenceInput = {
    id?: number
    name: string
    lastName: string
    phone: string
    email: string
    password: string
    staff_id: number
  }

  export type ResidentUpdateWithoutResidenceInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    staff?: StaffUpdateOneRequiredWithoutResidentToStaffNestedInput
  }

  export type ResidentUncheckedUpdateWithoutResidenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    staff_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResidentUncheckedUpdateManyWithoutResidenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    staff_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}