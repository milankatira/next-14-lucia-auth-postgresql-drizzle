import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle"
import db from "@/lib/database"
import { sessionTable, userTable } from "@/lib/database/schema"

const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable)

export default adapter
