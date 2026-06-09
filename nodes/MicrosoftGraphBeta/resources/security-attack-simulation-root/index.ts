import type { INodeProperties } from 'n8n-workflow';

export const securityAttackSimulationRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					]
				}
			},
			"options": [
				{
					"name": "Security Delete Attack Simulation",
					"value": "Security Delete Attack Simulation",
					"action": "Delete navigation property attackSimulation for security",
					"description": "Delete navigation property attackSimulation for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/attackSimulation"
						}
					}
				},
				{
					"name": "Security Get Attack Simulation",
					"value": "Security Get Attack Simulation",
					"action": "Get attackSimulation from security",
					"description": "Provides tenants capability to launch a simulated and realistic phishing attack and learn from it.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation"
						}
					}
				},
				{
					"name": "Security Update Attack Simulation",
					"value": "Security Update Attack Simulation",
					"action": "Update the navigation property attackSimulation in security",
					"description": "Update the navigation property attackSimulation in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/attackSimulation"
						}
					}
				},
				{
					"name": "Security Attack Simulation List Operations",
					"value": "Security Attack Simulation List Operations",
					"action": "Get operations from security",
					"description": "Represents an attack simulation training operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation/operations"
						}
					}
				},
				{
					"name": "Security Attack Simulation Create Operations",
					"value": "Security Attack Simulation Create Operations",
					"action": "Create new navigation property to operations for security",
					"description": "Create new navigation property to operations for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/attackSimulation/operations"
						}
					}
				},
				{
					"name": "Security Attack Simulation Delete Operations",
					"value": "Security Attack Simulation Delete Operations",
					"action": "Delete navigation property operations for security",
					"description": "Delete navigation property operations for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/attackSimulation/operations/{{$parameter[\"attackSimulationOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Get Operations",
					"value": "Security Attack Simulation Get Operations",
					"action": "Get operations from security",
					"description": "Represents an attack simulation training operation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation/operations/{{$parameter[\"attackSimulationOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Update Operations",
					"value": "Security Attack Simulation Update Operations",
					"action": "Update the navigation property operations in security",
					"description": "Update the navigation property operations in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/attackSimulation/operations/{{$parameter[\"attackSimulationOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation List Payloads",
					"value": "Security Attack Simulation List Payloads",
					"action": "List payloads",
					"description": "Get a list of payloads for attack simulation campaigns. This operation expects the mandatory parameter **source** to filter and query the respective data source.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation/payloads"
						}
					}
				},
				{
					"name": "Security Attack Simulation Create Payloads",
					"value": "Security Attack Simulation Create Payloads",
					"action": "Create new navigation property to payloads for security",
					"description": "Create new navigation property to payloads for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/attackSimulation/payloads"
						}
					}
				},
				{
					"name": "Security Attack Simulation Delete Payloads",
					"value": "Security Attack Simulation Delete Payloads",
					"action": "Delete navigation property payloads for security",
					"description": "Delete navigation property payloads for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/attackSimulation/payloads/{{$parameter[\"payload-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Get Payloads",
					"value": "Security Attack Simulation Get Payloads",
					"action": "Get payloads from security",
					"description": "Represents an attack simulation training campaign payload in a tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation/payloads/{{$parameter[\"payload-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Update Payloads",
					"value": "Security Attack Simulation Update Payloads",
					"action": "Update the navigation property payloads in security",
					"description": "Update the navigation property payloads in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/attackSimulation/payloads/{{$parameter[\"payload-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation List Simulation Automations",
					"value": "Security Attack Simulation List Simulation Automations",
					"action": "List simulationAutomations",
					"description": "Get a list of attack simulation automations for a tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation/simulationAutomations"
						}
					}
				},
				{
					"name": "Security Attack Simulation Create Simulation Automations",
					"value": "Security Attack Simulation Create Simulation Automations",
					"action": "Create new navigation property to simulationAutomations for security",
					"description": "Create new navigation property to simulationAutomations for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/attackSimulation/simulationAutomations"
						}
					}
				},
				{
					"name": "Security Attack Simulation Delete Simulation Automations",
					"value": "Security Attack Simulation Delete Simulation Automations",
					"action": "Delete navigation property simulationAutomations for security",
					"description": "Delete navigation property simulationAutomations for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/attackSimulation/simulationAutomations/{{$parameter[\"simulationAutomation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Get Simulation Automations",
					"value": "Security Attack Simulation Get Simulation Automations",
					"action": "Get simulationAutomations from security",
					"description": "Represents simulation automation created to run on a tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation/simulationAutomations/{{$parameter[\"simulationAutomation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Update Simulation Automations",
					"value": "Security Attack Simulation Update Simulation Automations",
					"action": "Update the navigation property simulationAutomations in security",
					"description": "Update the navigation property simulationAutomations in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/attackSimulation/simulationAutomations/{{$parameter[\"simulationAutomation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Simulation Automations List Runs",
					"value": "Security Attack Simulation Simulation Automations List Runs",
					"action": "List runs",
					"description": "Get a list of the attack simulation automation runs for a tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation/simulationAutomations/{{$parameter[\"simulationAutomation-id\"]}}/runs"
						}
					}
				},
				{
					"name": "Security Attack Simulation Simulation Automations Create Runs",
					"value": "Security Attack Simulation Simulation Automations Create Runs",
					"action": "Create new navigation property to runs for security",
					"description": "Create new navigation property to runs for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/attackSimulation/simulationAutomations/{{$parameter[\"simulationAutomation-id\"]}}/runs"
						}
					}
				},
				{
					"name": "Security Attack Simulation Simulation Automations Delete Runs",
					"value": "Security Attack Simulation Simulation Automations Delete Runs",
					"action": "Delete navigation property runs for security",
					"description": "Delete navigation property runs for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/attackSimulation/simulationAutomations/{{$parameter[\"simulationAutomation-id\"]}}/runs/{{$parameter[\"simulationAutomationRun-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Simulation Automations Get Runs",
					"value": "Security Attack Simulation Simulation Automations Get Runs",
					"action": "Get runs from security",
					"description": "A collection of simulation automation runs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation/simulationAutomations/{{$parameter[\"simulationAutomation-id\"]}}/runs/{{$parameter[\"simulationAutomationRun-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Simulation Automations Update Runs",
					"value": "Security Attack Simulation Simulation Automations Update Runs",
					"action": "Update the navigation property runs in security",
					"description": "Update the navigation property runs in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/attackSimulation/simulationAutomations/{{$parameter[\"simulationAutomation-id\"]}}/runs/{{$parameter[\"simulationAutomationRun-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation List Simulations",
					"value": "Security Attack Simulation List Simulations",
					"action": "List simulations",
					"description": "Get a list of attack simulation campaigns for a tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation/simulations"
						}
					}
				},
				{
					"name": "Security Attack Simulation Create Simulations",
					"value": "Security Attack Simulation Create Simulations",
					"action": "Create simulation",
					"description": "Create an attack simulation campaign for a tenant.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/attackSimulation/simulations"
						}
					}
				},
				{
					"name": "Security Attack Simulation Delete Simulations",
					"value": "Security Attack Simulation Delete Simulations",
					"action": "Delete navigation property simulations for security",
					"description": "Delete navigation property simulations for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/attackSimulation/simulations/{{$parameter[\"simulation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Get Simulations",
					"value": "Security Attack Simulation Get Simulations",
					"action": "Get simulations from security",
					"description": "Represents an attack simulation training campaign in a tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation/simulations/{{$parameter[\"simulation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Update Simulations",
					"value": "Security Attack Simulation Update Simulations",
					"action": "Update the navigation property simulations in security",
					"description": "Update the navigation property simulations in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/attackSimulation/simulations/{{$parameter[\"simulation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Attack Simulation Simulations Get Payload",
					"value": "Security Attack Simulation Simulations Get Payload",
					"action": "Get payload from security",
					"description": "The payload associated with a simulation during its creation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/attackSimulation/simulations/{{$parameter[\"simulation-id\"]}}/payload"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /security/attackSimulation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Delete Attack Simulation"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Delete Attack Simulation"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Get Attack Simulation"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Get Attack Simulation"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Get Attack Simulation"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Update Attack Simulation"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Update Attack Simulation"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Operations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Operations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Operations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Operations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Operations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Operations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /security/attackSimulation/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /security/attackSimulation/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/attackSimulation/operations/{attackSimulationOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation/operations/{attackSimulationOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation/payloads",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Payloads"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Payloads"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Payloads"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Payloads"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Payloads"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Payloads"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Payloads"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Payloads"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Payloads"
					]
				}
			}
		},
		{
			"displayName": "POST /security/attackSimulation/payloads",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Create Payloads"
					]
				}
			}
		},
		{
			"displayName": "POST /security/attackSimulation/payloads<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Create Payloads"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/attackSimulation/payloads/{payload-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Delete Payloads"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Delete Payloads"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation/payloads/{payload-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Payloads"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Payloads"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Payloads"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation/payloads/{payload-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Update Payloads"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation/payloads/{payload-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Update Payloads"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation/simulationAutomations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "POST /security/attackSimulation/simulationAutomations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Create Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "POST /security/attackSimulation/simulationAutomations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Create Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Delete Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Delete Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Update Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Update Simulation Automations"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations List Runs"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations List Runs"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations List Runs"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations List Runs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations List Runs"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations List Runs"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations List Runs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations List Runs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations List Runs"
					]
				}
			}
		},
		{
			"displayName": "POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations Create Runs"
					]
				}
			}
		},
		{
			"displayName": "POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations Create Runs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations Delete Runs"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations Delete Runs"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations Get Runs"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations Get Runs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations Get Runs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations Update Runs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulation Automations Update Runs"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation/simulations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation List Simulations"
					]
				}
			}
		},
		{
			"displayName": "POST /security/attackSimulation/simulations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Create Simulations"
					]
				}
			}
		},
		{
			"displayName": "POST /security/attackSimulation/simulations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Create Simulations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/attackSimulation/simulations/{simulation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Delete Simulations"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Delete Simulations"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation/simulations/{simulation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Simulations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Simulations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Get Simulations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation/simulations/{simulation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Update Simulations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/attackSimulation/simulations/{simulation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Update Simulations"
					]
				}
			}
		},
		{
			"displayName": "GET /security/attackSimulation/simulations/{simulation-id}/payload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulations Get Payload"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulations Get Payload"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Attack Simulation Root"
					],
					"operation": [
						"Security Attack Simulation Simulations Get Payload"
					]
				}
			}
		},
];
