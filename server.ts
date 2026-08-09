// SMOKE TEST FIXTURE — exercises M8ven's publisher funnel end to end. Not a real MCP.
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
const server = new McpServer({ name: 'm8ven-smoke-test-mcp', version: '1.0.0' })
server.tool('smoke_ping', 'Returns pong. Exists so the scanner has one tool to find.', {}, async () => ({ content: [{ type: 'text', text: 'pong' }] }))
