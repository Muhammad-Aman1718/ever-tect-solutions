
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
 * Model UserFormData
 * 
 */
export type UserFormData = $Result.DefaultSelection<Prisma.$UserFormDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserFormData
 * const userFormData = await prisma.userFormData.findMany()
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
   * // Fetch zero or more UserFormData
   * const userFormData = await prisma.userFormData.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userFormData`: Exposes CRUD operations for the **UserFormData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFormData
    * const userFormData = await prisma.userFormData.findMany()
    * ```
    */
  get userFormData(): Prisma.UserFormDataDelegate<ExtArgs, ClientOptions>;
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
    UserFormData: 'UserFormData'
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
      modelProps: "userFormData"
      txIsolationLevel: never
    }
    model: {
      UserFormData: {
        payload: Prisma.$UserFormDataPayload<ExtArgs>
        fields: Prisma.UserFormDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFormDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFormDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormDataPayload>
          }
          findFirst: {
            args: Prisma.UserFormDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFormDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormDataPayload>
          }
          findMany: {
            args: Prisma.UserFormDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormDataPayload>[]
          }
          create: {
            args: Prisma.UserFormDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormDataPayload>
          }
          createMany: {
            args: Prisma.UserFormDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserFormDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormDataPayload>
          }
          update: {
            args: Prisma.UserFormDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormDataPayload>
          }
          deleteMany: {
            args: Prisma.UserFormDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFormDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserFormDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFormDataPayload>
          }
          aggregate: {
            args: Prisma.UserFormDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFormData>
          }
          groupBy: {
            args: Prisma.UserFormDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFormDataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFormDataFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserFormDataAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserFormDataCountArgs<ExtArgs>
            result: $Utils.Optional<UserFormDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    userFormData?: UserFormDataOmit
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
   * Models
   */

  /**
   * Model UserFormData
   */

  export type AggregateUserFormData = {
    _count: UserFormDataCountAggregateOutputType | null
    _min: UserFormDataMinAggregateOutputType | null
    _max: UserFormDataMaxAggregateOutputType | null
  }

  export type UserFormDataMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    fatherName: string | null
    email: string | null
    phoneNumber: string | null
    city: string | null
    province: string | null
    education: string | null
    course: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserFormDataMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    fatherName: string | null
    email: string | null
    phoneNumber: string | null
    city: string | null
    province: string | null
    education: string | null
    course: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserFormDataCountAggregateOutputType = {
    id: number
    fullName: number
    fatherName: number
    email: number
    phoneNumber: number
    city: number
    province: number
    education: number
    course: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserFormDataMinAggregateInputType = {
    id?: true
    fullName?: true
    fatherName?: true
    email?: true
    phoneNumber?: true
    city?: true
    province?: true
    education?: true
    course?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserFormDataMaxAggregateInputType = {
    id?: true
    fullName?: true
    fatherName?: true
    email?: true
    phoneNumber?: true
    city?: true
    province?: true
    education?: true
    course?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserFormDataCountAggregateInputType = {
    id?: true
    fullName?: true
    fatherName?: true
    email?: true
    phoneNumber?: true
    city?: true
    province?: true
    education?: true
    course?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserFormDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFormData to aggregate.
     */
    where?: UserFormDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFormData to fetch.
     */
    orderBy?: UserFormDataOrderByWithRelationInput | UserFormDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFormDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFormData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFormData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFormData
    **/
    _count?: true | UserFormDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFormDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFormDataMaxAggregateInputType
  }

  export type GetUserFormDataAggregateType<T extends UserFormDataAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFormData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFormData[P]>
      : GetScalarType<T[P], AggregateUserFormData[P]>
  }




  export type UserFormDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFormDataWhereInput
    orderBy?: UserFormDataOrderByWithAggregationInput | UserFormDataOrderByWithAggregationInput[]
    by: UserFormDataScalarFieldEnum[] | UserFormDataScalarFieldEnum
    having?: UserFormDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFormDataCountAggregateInputType | true
    _min?: UserFormDataMinAggregateInputType
    _max?: UserFormDataMaxAggregateInputType
  }

  export type UserFormDataGroupByOutputType = {
    id: string
    fullName: string
    fatherName: string
    email: string
    phoneNumber: string
    city: string
    province: string
    education: string
    course: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: UserFormDataCountAggregateOutputType | null
    _min: UserFormDataMinAggregateOutputType | null
    _max: UserFormDataMaxAggregateOutputType | null
  }

  type GetUserFormDataGroupByPayload<T extends UserFormDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFormDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFormDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFormDataGroupByOutputType[P]>
            : GetScalarType<T[P], UserFormDataGroupByOutputType[P]>
        }
      >
    >


  export type UserFormDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    fatherName?: boolean
    email?: boolean
    phoneNumber?: boolean
    city?: boolean
    province?: boolean
    education?: boolean
    course?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userFormData"]>



  export type UserFormDataSelectScalar = {
    id?: boolean
    fullName?: boolean
    fatherName?: boolean
    email?: boolean
    phoneNumber?: boolean
    city?: boolean
    province?: boolean
    education?: boolean
    course?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserFormDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "fatherName" | "email" | "phoneNumber" | "city" | "province" | "education" | "course" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["userFormData"]>

  export type $UserFormDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFormData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      fatherName: string
      email: string
      phoneNumber: string
      city: string
      province: string
      education: string
      course: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userFormData"]>
    composites: {}
  }

  type UserFormDataGetPayload<S extends boolean | null | undefined | UserFormDataDefaultArgs> = $Result.GetResult<Prisma.$UserFormDataPayload, S>

  type UserFormDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFormDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFormDataCountAggregateInputType | true
    }

  export interface UserFormDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFormData'], meta: { name: 'UserFormData' } }
    /**
     * Find zero or one UserFormData that matches the filter.
     * @param {UserFormDataFindUniqueArgs} args - Arguments to find a UserFormData
     * @example
     * // Get one UserFormData
     * const userFormData = await prisma.userFormData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFormDataFindUniqueArgs>(args: SelectSubset<T, UserFormDataFindUniqueArgs<ExtArgs>>): Prisma__UserFormDataClient<$Result.GetResult<Prisma.$UserFormDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFormData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFormDataFindUniqueOrThrowArgs} args - Arguments to find a UserFormData
     * @example
     * // Get one UserFormData
     * const userFormData = await prisma.userFormData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFormDataFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFormDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFormDataClient<$Result.GetResult<Prisma.$UserFormDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFormData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormDataFindFirstArgs} args - Arguments to find a UserFormData
     * @example
     * // Get one UserFormData
     * const userFormData = await prisma.userFormData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFormDataFindFirstArgs>(args?: SelectSubset<T, UserFormDataFindFirstArgs<ExtArgs>>): Prisma__UserFormDataClient<$Result.GetResult<Prisma.$UserFormDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFormData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormDataFindFirstOrThrowArgs} args - Arguments to find a UserFormData
     * @example
     * // Get one UserFormData
     * const userFormData = await prisma.userFormData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFormDataFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFormDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFormDataClient<$Result.GetResult<Prisma.$UserFormDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFormData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFormData
     * const userFormData = await prisma.userFormData.findMany()
     * 
     * // Get first 10 UserFormData
     * const userFormData = await prisma.userFormData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFormDataWithIdOnly = await prisma.userFormData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFormDataFindManyArgs>(args?: SelectSubset<T, UserFormDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFormDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFormData.
     * @param {UserFormDataCreateArgs} args - Arguments to create a UserFormData.
     * @example
     * // Create one UserFormData
     * const UserFormData = await prisma.userFormData.create({
     *   data: {
     *     // ... data to create a UserFormData
     *   }
     * })
     * 
     */
    create<T extends UserFormDataCreateArgs>(args: SelectSubset<T, UserFormDataCreateArgs<ExtArgs>>): Prisma__UserFormDataClient<$Result.GetResult<Prisma.$UserFormDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFormData.
     * @param {UserFormDataCreateManyArgs} args - Arguments to create many UserFormData.
     * @example
     * // Create many UserFormData
     * const userFormData = await prisma.userFormData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFormDataCreateManyArgs>(args?: SelectSubset<T, UserFormDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserFormData.
     * @param {UserFormDataDeleteArgs} args - Arguments to delete one UserFormData.
     * @example
     * // Delete one UserFormData
     * const UserFormData = await prisma.userFormData.delete({
     *   where: {
     *     // ... filter to delete one UserFormData
     *   }
     * })
     * 
     */
    delete<T extends UserFormDataDeleteArgs>(args: SelectSubset<T, UserFormDataDeleteArgs<ExtArgs>>): Prisma__UserFormDataClient<$Result.GetResult<Prisma.$UserFormDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFormData.
     * @param {UserFormDataUpdateArgs} args - Arguments to update one UserFormData.
     * @example
     * // Update one UserFormData
     * const userFormData = await prisma.userFormData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFormDataUpdateArgs>(args: SelectSubset<T, UserFormDataUpdateArgs<ExtArgs>>): Prisma__UserFormDataClient<$Result.GetResult<Prisma.$UserFormDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFormData.
     * @param {UserFormDataDeleteManyArgs} args - Arguments to filter UserFormData to delete.
     * @example
     * // Delete a few UserFormData
     * const { count } = await prisma.userFormData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFormDataDeleteManyArgs>(args?: SelectSubset<T, UserFormDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFormData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFormData
     * const userFormData = await prisma.userFormData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFormDataUpdateManyArgs>(args: SelectSubset<T, UserFormDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFormData.
     * @param {UserFormDataUpsertArgs} args - Arguments to update or create a UserFormData.
     * @example
     * // Update or create a UserFormData
     * const userFormData = await prisma.userFormData.upsert({
     *   create: {
     *     // ... data to create a UserFormData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFormData we want to update
     *   }
     * })
     */
    upsert<T extends UserFormDataUpsertArgs>(args: SelectSubset<T, UserFormDataUpsertArgs<ExtArgs>>): Prisma__UserFormDataClient<$Result.GetResult<Prisma.$UserFormDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFormData that matches the filter.
     * @param {UserFormDataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userFormData = await prisma.userFormData.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFormDataFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserFormData.
     * @param {UserFormDataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userFormData = await prisma.userFormData.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserFormDataAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserFormData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormDataCountArgs} args - Arguments to filter UserFormData to count.
     * @example
     * // Count the number of UserFormData
     * const count = await prisma.userFormData.count({
     *   where: {
     *     // ... the filter for the UserFormData we want to count
     *   }
     * })
    **/
    count<T extends UserFormDataCountArgs>(
      args?: Subset<T, UserFormDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFormDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFormData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserFormDataAggregateArgs>(args: Subset<T, UserFormDataAggregateArgs>): Prisma.PrismaPromise<GetUserFormDataAggregateType<T>>

    /**
     * Group by UserFormData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFormDataGroupByArgs} args - Group by arguments.
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
      T extends UserFormDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFormDataGroupByArgs['orderBy'] }
        : { orderBy?: UserFormDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserFormDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFormDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFormData model
   */
  readonly fields: UserFormDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFormData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFormDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserFormData model
   */
  interface UserFormDataFieldRefs {
    readonly id: FieldRef<"UserFormData", 'String'>
    readonly fullName: FieldRef<"UserFormData", 'String'>
    readonly fatherName: FieldRef<"UserFormData", 'String'>
    readonly email: FieldRef<"UserFormData", 'String'>
    readonly phoneNumber: FieldRef<"UserFormData", 'String'>
    readonly city: FieldRef<"UserFormData", 'String'>
    readonly province: FieldRef<"UserFormData", 'String'>
    readonly education: FieldRef<"UserFormData", 'String'>
    readonly course: FieldRef<"UserFormData", 'String'>
    readonly message: FieldRef<"UserFormData", 'String'>
    readonly createdAt: FieldRef<"UserFormData", 'DateTime'>
    readonly updatedAt: FieldRef<"UserFormData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFormData findUnique
   */
  export type UserFormDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFormData
     */
    select?: UserFormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFormData
     */
    omit?: UserFormDataOmit<ExtArgs> | null
    /**
     * Filter, which UserFormData to fetch.
     */
    where: UserFormDataWhereUniqueInput
  }

  /**
   * UserFormData findUniqueOrThrow
   */
  export type UserFormDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFormData
     */
    select?: UserFormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFormData
     */
    omit?: UserFormDataOmit<ExtArgs> | null
    /**
     * Filter, which UserFormData to fetch.
     */
    where: UserFormDataWhereUniqueInput
  }

  /**
   * UserFormData findFirst
   */
  export type UserFormDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFormData
     */
    select?: UserFormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFormData
     */
    omit?: UserFormDataOmit<ExtArgs> | null
    /**
     * Filter, which UserFormData to fetch.
     */
    where?: UserFormDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFormData to fetch.
     */
    orderBy?: UserFormDataOrderByWithRelationInput | UserFormDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFormData.
     */
    cursor?: UserFormDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFormData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFormData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFormData.
     */
    distinct?: UserFormDataScalarFieldEnum | UserFormDataScalarFieldEnum[]
  }

  /**
   * UserFormData findFirstOrThrow
   */
  export type UserFormDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFormData
     */
    select?: UserFormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFormData
     */
    omit?: UserFormDataOmit<ExtArgs> | null
    /**
     * Filter, which UserFormData to fetch.
     */
    where?: UserFormDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFormData to fetch.
     */
    orderBy?: UserFormDataOrderByWithRelationInput | UserFormDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFormData.
     */
    cursor?: UserFormDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFormData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFormData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFormData.
     */
    distinct?: UserFormDataScalarFieldEnum | UserFormDataScalarFieldEnum[]
  }

  /**
   * UserFormData findMany
   */
  export type UserFormDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFormData
     */
    select?: UserFormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFormData
     */
    omit?: UserFormDataOmit<ExtArgs> | null
    /**
     * Filter, which UserFormData to fetch.
     */
    where?: UserFormDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFormData to fetch.
     */
    orderBy?: UserFormDataOrderByWithRelationInput | UserFormDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFormData.
     */
    cursor?: UserFormDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFormData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFormData.
     */
    skip?: number
    distinct?: UserFormDataScalarFieldEnum | UserFormDataScalarFieldEnum[]
  }

  /**
   * UserFormData create
   */
  export type UserFormDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFormData
     */
    select?: UserFormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFormData
     */
    omit?: UserFormDataOmit<ExtArgs> | null
    /**
     * The data needed to create a UserFormData.
     */
    data: XOR<UserFormDataCreateInput, UserFormDataUncheckedCreateInput>
  }

  /**
   * UserFormData createMany
   */
  export type UserFormDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFormData.
     */
    data: UserFormDataCreateManyInput | UserFormDataCreateManyInput[]
  }

  /**
   * UserFormData update
   */
  export type UserFormDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFormData
     */
    select?: UserFormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFormData
     */
    omit?: UserFormDataOmit<ExtArgs> | null
    /**
     * The data needed to update a UserFormData.
     */
    data: XOR<UserFormDataUpdateInput, UserFormDataUncheckedUpdateInput>
    /**
     * Choose, which UserFormData to update.
     */
    where: UserFormDataWhereUniqueInput
  }

  /**
   * UserFormData updateMany
   */
  export type UserFormDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFormData.
     */
    data: XOR<UserFormDataUpdateManyMutationInput, UserFormDataUncheckedUpdateManyInput>
    /**
     * Filter which UserFormData to update
     */
    where?: UserFormDataWhereInput
    /**
     * Limit how many UserFormData to update.
     */
    limit?: number
  }

  /**
   * UserFormData upsert
   */
  export type UserFormDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFormData
     */
    select?: UserFormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFormData
     */
    omit?: UserFormDataOmit<ExtArgs> | null
    /**
     * The filter to search for the UserFormData to update in case it exists.
     */
    where: UserFormDataWhereUniqueInput
    /**
     * In case the UserFormData found by the `where` argument doesn't exist, create a new UserFormData with this data.
     */
    create: XOR<UserFormDataCreateInput, UserFormDataUncheckedCreateInput>
    /**
     * In case the UserFormData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFormDataUpdateInput, UserFormDataUncheckedUpdateInput>
  }

  /**
   * UserFormData delete
   */
  export type UserFormDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFormData
     */
    select?: UserFormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFormData
     */
    omit?: UserFormDataOmit<ExtArgs> | null
    /**
     * Filter which UserFormData to delete.
     */
    where: UserFormDataWhereUniqueInput
  }

  /**
   * UserFormData deleteMany
   */
  export type UserFormDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFormData to delete
     */
    where?: UserFormDataWhereInput
    /**
     * Limit how many UserFormData to delete.
     */
    limit?: number
  }

  /**
   * UserFormData findRaw
   */
  export type UserFormDataFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserFormData aggregateRaw
   */
  export type UserFormDataAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserFormData without action
   */
  export type UserFormDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFormData
     */
    select?: UserFormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFormData
     */
    omit?: UserFormDataOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserFormDataScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    fatherName: 'fatherName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    city: 'city',
    province: 'province',
    education: 'education',
    course: 'course',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserFormDataScalarFieldEnum = (typeof UserFormDataScalarFieldEnum)[keyof typeof UserFormDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserFormDataWhereInput = {
    AND?: UserFormDataWhereInput | UserFormDataWhereInput[]
    OR?: UserFormDataWhereInput[]
    NOT?: UserFormDataWhereInput | UserFormDataWhereInput[]
    id?: StringFilter<"UserFormData"> | string
    fullName?: StringFilter<"UserFormData"> | string
    fatherName?: StringFilter<"UserFormData"> | string
    email?: StringFilter<"UserFormData"> | string
    phoneNumber?: StringFilter<"UserFormData"> | string
    city?: StringFilter<"UserFormData"> | string
    province?: StringFilter<"UserFormData"> | string
    education?: StringFilter<"UserFormData"> | string
    course?: StringFilter<"UserFormData"> | string
    message?: StringFilter<"UserFormData"> | string
    createdAt?: DateTimeFilter<"UserFormData"> | Date | string
    updatedAt?: DateTimeFilter<"UserFormData"> | Date | string
  }

  export type UserFormDataOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    fatherName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    city?: SortOrder
    province?: SortOrder
    education?: SortOrder
    course?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFormDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserFormDataWhereInput | UserFormDataWhereInput[]
    OR?: UserFormDataWhereInput[]
    NOT?: UserFormDataWhereInput | UserFormDataWhereInput[]
    fullName?: StringFilter<"UserFormData"> | string
    fatherName?: StringFilter<"UserFormData"> | string
    phoneNumber?: StringFilter<"UserFormData"> | string
    city?: StringFilter<"UserFormData"> | string
    province?: StringFilter<"UserFormData"> | string
    education?: StringFilter<"UserFormData"> | string
    course?: StringFilter<"UserFormData"> | string
    message?: StringFilter<"UserFormData"> | string
    createdAt?: DateTimeFilter<"UserFormData"> | Date | string
    updatedAt?: DateTimeFilter<"UserFormData"> | Date | string
  }, "id" | "email">

  export type UserFormDataOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    fatherName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    city?: SortOrder
    province?: SortOrder
    education?: SortOrder
    course?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserFormDataCountOrderByAggregateInput
    _max?: UserFormDataMaxOrderByAggregateInput
    _min?: UserFormDataMinOrderByAggregateInput
  }

  export type UserFormDataScalarWhereWithAggregatesInput = {
    AND?: UserFormDataScalarWhereWithAggregatesInput | UserFormDataScalarWhereWithAggregatesInput[]
    OR?: UserFormDataScalarWhereWithAggregatesInput[]
    NOT?: UserFormDataScalarWhereWithAggregatesInput | UserFormDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFormData"> | string
    fullName?: StringWithAggregatesFilter<"UserFormData"> | string
    fatherName?: StringWithAggregatesFilter<"UserFormData"> | string
    email?: StringWithAggregatesFilter<"UserFormData"> | string
    phoneNumber?: StringWithAggregatesFilter<"UserFormData"> | string
    city?: StringWithAggregatesFilter<"UserFormData"> | string
    province?: StringWithAggregatesFilter<"UserFormData"> | string
    education?: StringWithAggregatesFilter<"UserFormData"> | string
    course?: StringWithAggregatesFilter<"UserFormData"> | string
    message?: StringWithAggregatesFilter<"UserFormData"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserFormData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserFormData"> | Date | string
  }

  export type UserFormDataCreateInput = {
    id?: string
    fullName: string
    fatherName: string
    email: string
    phoneNumber: string
    city: string
    province: string
    education: string
    course: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFormDataUncheckedCreateInput = {
    id?: string
    fullName: string
    fatherName: string
    email: string
    phoneNumber: string
    city: string
    province: string
    education: string
    course: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFormDataUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFormDataUncheckedUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFormDataCreateManyInput = {
    id?: string
    fullName: string
    fatherName: string
    email: string
    phoneNumber: string
    city: string
    province: string
    education: string
    course: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFormDataUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFormDataUncheckedUpdateManyInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserFormDataCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    fatherName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    city?: SortOrder
    province?: SortOrder
    education?: SortOrder
    course?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFormDataMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    fatherName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    city?: SortOrder
    province?: SortOrder
    education?: SortOrder
    course?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFormDataMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    fatherName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    city?: SortOrder
    province?: SortOrder
    education?: SortOrder
    course?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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