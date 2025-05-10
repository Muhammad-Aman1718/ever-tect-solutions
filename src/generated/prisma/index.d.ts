
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
 * Model CourseForm
 * 
 */
export type CourseForm = $Result.DefaultSelection<Prisma.$CourseFormPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CourseForms
 * const courseForms = await prisma.courseForm.findMany()
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
   * // Fetch zero or more CourseForms
   * const courseForms = await prisma.courseForm.findMany()
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
   * `prisma.courseForm`: Exposes CRUD operations for the **CourseForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseForms
    * const courseForms = await prisma.courseForm.findMany()
    * ```
    */
  get courseForm(): Prisma.CourseFormDelegate<ExtArgs, ClientOptions>;
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
    CourseForm: 'CourseForm'
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
      modelProps: "courseForm"
      txIsolationLevel: never
    }
    model: {
      CourseForm: {
        payload: Prisma.$CourseFormPayload<ExtArgs>
        fields: Prisma.CourseFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFormPayload>
          }
          findFirst: {
            args: Prisma.CourseFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFormPayload>
          }
          findMany: {
            args: Prisma.CourseFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFormPayload>[]
          }
          create: {
            args: Prisma.CourseFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFormPayload>
          }
          createMany: {
            args: Prisma.CourseFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFormPayload>
          }
          update: {
            args: Prisma.CourseFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFormPayload>
          }
          deleteMany: {
            args: Prisma.CourseFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFormPayload>
          }
          aggregate: {
            args: Prisma.CourseFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseForm>
          }
          groupBy: {
            args: Prisma.CourseFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseFormGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CourseFormFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CourseFormAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CourseFormCountArgs<ExtArgs>
            result: $Utils.Optional<CourseFormCountAggregateOutputType> | number
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
    courseForm?: CourseFormOmit
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
   * Model CourseForm
   */

  export type AggregateCourseForm = {
    _count: CourseFormCountAggregateOutputType | null
    _min: CourseFormMinAggregateOutputType | null
    _max: CourseFormMaxAggregateOutputType | null
  }

  export type CourseFormMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    fatherName: string | null
    email: string | null
    phoneNumber: string | null
    education: string | null
    course: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseFormMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    fatherName: string | null
    email: string | null
    phoneNumber: string | null
    education: string | null
    course: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseFormCountAggregateOutputType = {
    id: number
    fullName: number
    fatherName: number
    email: number
    phoneNumber: number
    education: number
    course: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseFormMinAggregateInputType = {
    id?: true
    fullName?: true
    fatherName?: true
    email?: true
    phoneNumber?: true
    education?: true
    course?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseFormMaxAggregateInputType = {
    id?: true
    fullName?: true
    fatherName?: true
    email?: true
    phoneNumber?: true
    education?: true
    course?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseFormCountAggregateInputType = {
    id?: true
    fullName?: true
    fatherName?: true
    email?: true
    phoneNumber?: true
    education?: true
    course?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseForm to aggregate.
     */
    where?: CourseFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseForms to fetch.
     */
    orderBy?: CourseFormOrderByWithRelationInput | CourseFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseForms
    **/
    _count?: true | CourseFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseFormMaxAggregateInputType
  }

  export type GetCourseFormAggregateType<T extends CourseFormAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseForm[P]>
      : GetScalarType<T[P], AggregateCourseForm[P]>
  }




  export type CourseFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseFormWhereInput
    orderBy?: CourseFormOrderByWithAggregationInput | CourseFormOrderByWithAggregationInput[]
    by: CourseFormScalarFieldEnum[] | CourseFormScalarFieldEnum
    having?: CourseFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseFormCountAggregateInputType | true
    _min?: CourseFormMinAggregateInputType
    _max?: CourseFormMaxAggregateInputType
  }

  export type CourseFormGroupByOutputType = {
    id: string
    fullName: string
    fatherName: string
    email: string
    phoneNumber: string
    education: string
    course: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: CourseFormCountAggregateOutputType | null
    _min: CourseFormMinAggregateOutputType | null
    _max: CourseFormMaxAggregateOutputType | null
  }

  type GetCourseFormGroupByPayload<T extends CourseFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseFormGroupByOutputType[P]>
            : GetScalarType<T[P], CourseFormGroupByOutputType[P]>
        }
      >
    >


  export type CourseFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    fatherName?: boolean
    email?: boolean
    phoneNumber?: boolean
    education?: boolean
    course?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courseForm"]>



  export type CourseFormSelectScalar = {
    id?: boolean
    fullName?: boolean
    fatherName?: boolean
    email?: boolean
    phoneNumber?: boolean
    education?: boolean
    course?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "fatherName" | "email" | "phoneNumber" | "education" | "course" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["courseForm"]>

  export type $CourseFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      fatherName: string
      email: string
      phoneNumber: string
      education: string
      course: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseForm"]>
    composites: {}
  }

  type CourseFormGetPayload<S extends boolean | null | undefined | CourseFormDefaultArgs> = $Result.GetResult<Prisma.$CourseFormPayload, S>

  type CourseFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseFormCountAggregateInputType | true
    }

  export interface CourseFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseForm'], meta: { name: 'CourseForm' } }
    /**
     * Find zero or one CourseForm that matches the filter.
     * @param {CourseFormFindUniqueArgs} args - Arguments to find a CourseForm
     * @example
     * // Get one CourseForm
     * const courseForm = await prisma.courseForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFormFindUniqueArgs>(args: SelectSubset<T, CourseFormFindUniqueArgs<ExtArgs>>): Prisma__CourseFormClient<$Result.GetResult<Prisma.$CourseFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFormFindUniqueOrThrowArgs} args - Arguments to find a CourseForm
     * @example
     * // Get one CourseForm
     * const courseForm = await prisma.courseForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFormFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseFormClient<$Result.GetResult<Prisma.$CourseFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFormFindFirstArgs} args - Arguments to find a CourseForm
     * @example
     * // Get one CourseForm
     * const courseForm = await prisma.courseForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFormFindFirstArgs>(args?: SelectSubset<T, CourseFormFindFirstArgs<ExtArgs>>): Prisma__CourseFormClient<$Result.GetResult<Prisma.$CourseFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFormFindFirstOrThrowArgs} args - Arguments to find a CourseForm
     * @example
     * // Get one CourseForm
     * const courseForm = await prisma.courseForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFormFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseFormClient<$Result.GetResult<Prisma.$CourseFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseForms
     * const courseForms = await prisma.courseForm.findMany()
     * 
     * // Get first 10 CourseForms
     * const courseForms = await prisma.courseForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseFormWithIdOnly = await prisma.courseForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFormFindManyArgs>(args?: SelectSubset<T, CourseFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseForm.
     * @param {CourseFormCreateArgs} args - Arguments to create a CourseForm.
     * @example
     * // Create one CourseForm
     * const CourseForm = await prisma.courseForm.create({
     *   data: {
     *     // ... data to create a CourseForm
     *   }
     * })
     * 
     */
    create<T extends CourseFormCreateArgs>(args: SelectSubset<T, CourseFormCreateArgs<ExtArgs>>): Prisma__CourseFormClient<$Result.GetResult<Prisma.$CourseFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseForms.
     * @param {CourseFormCreateManyArgs} args - Arguments to create many CourseForms.
     * @example
     * // Create many CourseForms
     * const courseForm = await prisma.courseForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseFormCreateManyArgs>(args?: SelectSubset<T, CourseFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourseForm.
     * @param {CourseFormDeleteArgs} args - Arguments to delete one CourseForm.
     * @example
     * // Delete one CourseForm
     * const CourseForm = await prisma.courseForm.delete({
     *   where: {
     *     // ... filter to delete one CourseForm
     *   }
     * })
     * 
     */
    delete<T extends CourseFormDeleteArgs>(args: SelectSubset<T, CourseFormDeleteArgs<ExtArgs>>): Prisma__CourseFormClient<$Result.GetResult<Prisma.$CourseFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseForm.
     * @param {CourseFormUpdateArgs} args - Arguments to update one CourseForm.
     * @example
     * // Update one CourseForm
     * const courseForm = await prisma.courseForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseFormUpdateArgs>(args: SelectSubset<T, CourseFormUpdateArgs<ExtArgs>>): Prisma__CourseFormClient<$Result.GetResult<Prisma.$CourseFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseForms.
     * @param {CourseFormDeleteManyArgs} args - Arguments to filter CourseForms to delete.
     * @example
     * // Delete a few CourseForms
     * const { count } = await prisma.courseForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseFormDeleteManyArgs>(args?: SelectSubset<T, CourseFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseForms
     * const courseForm = await prisma.courseForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseFormUpdateManyArgs>(args: SelectSubset<T, CourseFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseForm.
     * @param {CourseFormUpsertArgs} args - Arguments to update or create a CourseForm.
     * @example
     * // Update or create a CourseForm
     * const courseForm = await prisma.courseForm.upsert({
     *   create: {
     *     // ... data to create a CourseForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseForm we want to update
     *   }
     * })
     */
    upsert<T extends CourseFormUpsertArgs>(args: SelectSubset<T, CourseFormUpsertArgs<ExtArgs>>): Prisma__CourseFormClient<$Result.GetResult<Prisma.$CourseFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseForms that matches the filter.
     * @param {CourseFormFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const courseForm = await prisma.courseForm.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CourseFormFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CourseForm.
     * @param {CourseFormAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const courseForm = await prisma.courseForm.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CourseFormAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CourseForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFormCountArgs} args - Arguments to filter CourseForms to count.
     * @example
     * // Count the number of CourseForms
     * const count = await prisma.courseForm.count({
     *   where: {
     *     // ... the filter for the CourseForms we want to count
     *   }
     * })
    **/
    count<T extends CourseFormCountArgs>(
      args?: Subset<T, CourseFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseFormAggregateArgs>(args: Subset<T, CourseFormAggregateArgs>): Prisma.PrismaPromise<GetCourseFormAggregateType<T>>

    /**
     * Group by CourseForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFormGroupByArgs} args - Group by arguments.
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
      T extends CourseFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseFormGroupByArgs['orderBy'] }
        : { orderBy?: CourseFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseForm model
   */
  readonly fields: CourseFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CourseForm model
   */
  interface CourseFormFieldRefs {
    readonly id: FieldRef<"CourseForm", 'String'>
    readonly fullName: FieldRef<"CourseForm", 'String'>
    readonly fatherName: FieldRef<"CourseForm", 'String'>
    readonly email: FieldRef<"CourseForm", 'String'>
    readonly phoneNumber: FieldRef<"CourseForm", 'String'>
    readonly education: FieldRef<"CourseForm", 'String'>
    readonly course: FieldRef<"CourseForm", 'String'>
    readonly message: FieldRef<"CourseForm", 'String'>
    readonly createdAt: FieldRef<"CourseForm", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseForm findUnique
   */
  export type CourseFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseForm
     */
    select?: CourseFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseForm
     */
    omit?: CourseFormOmit<ExtArgs> | null
    /**
     * Filter, which CourseForm to fetch.
     */
    where: CourseFormWhereUniqueInput
  }

  /**
   * CourseForm findUniqueOrThrow
   */
  export type CourseFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseForm
     */
    select?: CourseFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseForm
     */
    omit?: CourseFormOmit<ExtArgs> | null
    /**
     * Filter, which CourseForm to fetch.
     */
    where: CourseFormWhereUniqueInput
  }

  /**
   * CourseForm findFirst
   */
  export type CourseFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseForm
     */
    select?: CourseFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseForm
     */
    omit?: CourseFormOmit<ExtArgs> | null
    /**
     * Filter, which CourseForm to fetch.
     */
    where?: CourseFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseForms to fetch.
     */
    orderBy?: CourseFormOrderByWithRelationInput | CourseFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseForms.
     */
    cursor?: CourseFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseForms.
     */
    distinct?: CourseFormScalarFieldEnum | CourseFormScalarFieldEnum[]
  }

  /**
   * CourseForm findFirstOrThrow
   */
  export type CourseFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseForm
     */
    select?: CourseFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseForm
     */
    omit?: CourseFormOmit<ExtArgs> | null
    /**
     * Filter, which CourseForm to fetch.
     */
    where?: CourseFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseForms to fetch.
     */
    orderBy?: CourseFormOrderByWithRelationInput | CourseFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseForms.
     */
    cursor?: CourseFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseForms.
     */
    distinct?: CourseFormScalarFieldEnum | CourseFormScalarFieldEnum[]
  }

  /**
   * CourseForm findMany
   */
  export type CourseFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseForm
     */
    select?: CourseFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseForm
     */
    omit?: CourseFormOmit<ExtArgs> | null
    /**
     * Filter, which CourseForms to fetch.
     */
    where?: CourseFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseForms to fetch.
     */
    orderBy?: CourseFormOrderByWithRelationInput | CourseFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseForms.
     */
    cursor?: CourseFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseForms.
     */
    skip?: number
    distinct?: CourseFormScalarFieldEnum | CourseFormScalarFieldEnum[]
  }

  /**
   * CourseForm create
   */
  export type CourseFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseForm
     */
    select?: CourseFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseForm
     */
    omit?: CourseFormOmit<ExtArgs> | null
    /**
     * The data needed to create a CourseForm.
     */
    data: XOR<CourseFormCreateInput, CourseFormUncheckedCreateInput>
  }

  /**
   * CourseForm createMany
   */
  export type CourseFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseForms.
     */
    data: CourseFormCreateManyInput | CourseFormCreateManyInput[]
  }

  /**
   * CourseForm update
   */
  export type CourseFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseForm
     */
    select?: CourseFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseForm
     */
    omit?: CourseFormOmit<ExtArgs> | null
    /**
     * The data needed to update a CourseForm.
     */
    data: XOR<CourseFormUpdateInput, CourseFormUncheckedUpdateInput>
    /**
     * Choose, which CourseForm to update.
     */
    where: CourseFormWhereUniqueInput
  }

  /**
   * CourseForm updateMany
   */
  export type CourseFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseForms.
     */
    data: XOR<CourseFormUpdateManyMutationInput, CourseFormUncheckedUpdateManyInput>
    /**
     * Filter which CourseForms to update
     */
    where?: CourseFormWhereInput
    /**
     * Limit how many CourseForms to update.
     */
    limit?: number
  }

  /**
   * CourseForm upsert
   */
  export type CourseFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseForm
     */
    select?: CourseFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseForm
     */
    omit?: CourseFormOmit<ExtArgs> | null
    /**
     * The filter to search for the CourseForm to update in case it exists.
     */
    where: CourseFormWhereUniqueInput
    /**
     * In case the CourseForm found by the `where` argument doesn't exist, create a new CourseForm with this data.
     */
    create: XOR<CourseFormCreateInput, CourseFormUncheckedCreateInput>
    /**
     * In case the CourseForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseFormUpdateInput, CourseFormUncheckedUpdateInput>
  }

  /**
   * CourseForm delete
   */
  export type CourseFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseForm
     */
    select?: CourseFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseForm
     */
    omit?: CourseFormOmit<ExtArgs> | null
    /**
     * Filter which CourseForm to delete.
     */
    where: CourseFormWhereUniqueInput
  }

  /**
   * CourseForm deleteMany
   */
  export type CourseFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseForms to delete
     */
    where?: CourseFormWhereInput
    /**
     * Limit how many CourseForms to delete.
     */
    limit?: number
  }

  /**
   * CourseForm findRaw
   */
  export type CourseFormFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CourseForm aggregateRaw
   */
  export type CourseFormAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CourseForm without action
   */
  export type CourseFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseForm
     */
    select?: CourseFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseForm
     */
    omit?: CourseFormOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const CourseFormScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    fatherName: 'fatherName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    education: 'education',
    course: 'course',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseFormScalarFieldEnum = (typeof CourseFormScalarFieldEnum)[keyof typeof CourseFormScalarFieldEnum]


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


  export type CourseFormWhereInput = {
    AND?: CourseFormWhereInput | CourseFormWhereInput[]
    OR?: CourseFormWhereInput[]
    NOT?: CourseFormWhereInput | CourseFormWhereInput[]
    id?: StringFilter<"CourseForm"> | string
    fullName?: StringFilter<"CourseForm"> | string
    fatherName?: StringFilter<"CourseForm"> | string
    email?: StringFilter<"CourseForm"> | string
    phoneNumber?: StringFilter<"CourseForm"> | string
    education?: StringFilter<"CourseForm"> | string
    course?: StringFilter<"CourseForm"> | string
    message?: StringFilter<"CourseForm"> | string
    createdAt?: DateTimeFilter<"CourseForm"> | Date | string
    updatedAt?: DateTimeFilter<"CourseForm"> | Date | string
  }

  export type CourseFormOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    fatherName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    education?: SortOrder
    course?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CourseFormWhereInput | CourseFormWhereInput[]
    OR?: CourseFormWhereInput[]
    NOT?: CourseFormWhereInput | CourseFormWhereInput[]
    fullName?: StringFilter<"CourseForm"> | string
    fatherName?: StringFilter<"CourseForm"> | string
    phoneNumber?: StringFilter<"CourseForm"> | string
    education?: StringFilter<"CourseForm"> | string
    course?: StringFilter<"CourseForm"> | string
    message?: StringFilter<"CourseForm"> | string
    createdAt?: DateTimeFilter<"CourseForm"> | Date | string
    updatedAt?: DateTimeFilter<"CourseForm"> | Date | string
  }, "id" | "email">

  export type CourseFormOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    fatherName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    education?: SortOrder
    course?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseFormCountOrderByAggregateInput
    _max?: CourseFormMaxOrderByAggregateInput
    _min?: CourseFormMinOrderByAggregateInput
  }

  export type CourseFormScalarWhereWithAggregatesInput = {
    AND?: CourseFormScalarWhereWithAggregatesInput | CourseFormScalarWhereWithAggregatesInput[]
    OR?: CourseFormScalarWhereWithAggregatesInput[]
    NOT?: CourseFormScalarWhereWithAggregatesInput | CourseFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseForm"> | string
    fullName?: StringWithAggregatesFilter<"CourseForm"> | string
    fatherName?: StringWithAggregatesFilter<"CourseForm"> | string
    email?: StringWithAggregatesFilter<"CourseForm"> | string
    phoneNumber?: StringWithAggregatesFilter<"CourseForm"> | string
    education?: StringWithAggregatesFilter<"CourseForm"> | string
    course?: StringWithAggregatesFilter<"CourseForm"> | string
    message?: StringWithAggregatesFilter<"CourseForm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CourseForm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseForm"> | Date | string
  }

  export type CourseFormCreateInput = {
    id?: string
    fullName: string
    fatherName: string
    email: string
    phoneNumber: string
    education: string
    course: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseFormUncheckedCreateInput = {
    id?: string
    fullName: string
    fatherName: string
    email: string
    phoneNumber: string
    education: string
    course: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseFormUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFormUncheckedUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFormCreateManyInput = {
    id?: string
    fullName: string
    fatherName: string
    email: string
    phoneNumber: string
    education: string
    course: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseFormUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFormUncheckedUpdateManyInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
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

  export type CourseFormCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    fatherName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    education?: SortOrder
    course?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseFormMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    fatherName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    education?: SortOrder
    course?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseFormMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    fatherName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
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