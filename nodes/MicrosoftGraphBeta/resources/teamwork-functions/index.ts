import type { INodeProperties } from 'n8n-workflow';

export const teamworkFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					]
				}
			},
			"options": [
				{
					"name": "Teamwork Deleted Teams Get All Messages",
					"value": "Teamwork Deleted Teams Get All Messages",
					"action": "Invoke function getAllMessages",
					"description": "Invoke function getAllMessages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/microsoft.graph.getAllMessages()"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Deleted Team Channels All Messages",
					"value": "Teamwork Deleted Teams Deleted Team Channels All Messages",
					"action": "Invoke function allMessages",
					"description": "Invoke function allMessages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/microsoft.graph.allMessages()"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Deleted Team Channels Get All Messages",
					"value": "Teamwork Deleted Teams Deleted Team Channels Get All Messages",
					"action": "Invoke function getAllMessages",
					"description": "Invoke function getAllMessages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/microsoft.graph.getAllMessages()"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Deleted Team Channels Channel Messages Delta",
					"value": "Teamwork Deleted Teams Deleted Team Channels Channel Messages Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Deleted Team Channels Channel Messages Chat Message Replies Delta",
					"value": "Teamwork Deleted Teams Deleted Team Channels Channel Messages Chat Message Replies Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Deleted Team Channels Channel Does User Have Access",
					"value": "Teamwork Deleted Teams Deleted Team Channels Channel Does User Have Access",
					"action": "Invoke function doesUserHaveAccess",
					"description": "Invoke function doesUserHaveAccess",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/microsoft.graph.doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName')"
						}
					}
				},
				{
					"name": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels All Messages",
					"value": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels All Messages",
					"action": "Invoke function allMessages",
					"description": "Invoke function allMessages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/teamTemplates/{{$parameter[\"teamTemplate-id\"]}}/definitions/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/microsoft.graph.allMessages()"
						}
					}
				},
				{
					"name": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Get All Messages",
					"value": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Get All Messages",
					"action": "Invoke function getAllMessages",
					"description": "Invoke function getAllMessages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/teamTemplates/{{$parameter[\"teamTemplate-id\"]}}/definitions/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/microsoft.graph.getAllMessages()"
						}
					}
				},
				{
					"name": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Delta",
					"value": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/teamTemplates/{{$parameter[\"teamTemplate-id\"]}}/definitions/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Delta",
					"value": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/teamTemplates/{{$parameter[\"teamTemplate-id\"]}}/definitions/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Does User Have Access",
					"value": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Does User Have Access",
					"action": "Invoke function doesUserHaveAccess",
					"description": "Invoke function doesUserHaveAccess",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/teamTemplates/{{$parameter[\"teamTemplate-id\"]}}/definitions/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/microsoft.graph.doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName')"
						}
					}
				},
				{
					"name": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Delta",
					"value": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/teamTemplates/{{$parameter[\"teamTemplate-id\"]}}/definitions/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Delta",
					"value": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/teamTemplates/{{$parameter[\"teamTemplate-id\"]}}/definitions/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Does User Have Access",
					"value": "Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Does User Have Access",
					"action": "Invoke function doesUserHaveAccess",
					"description": "Invoke function doesUserHaveAccess",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/teamTemplates/{{$parameter[\"teamTemplate-id\"]}}/definitions/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/microsoft.graph.doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName')"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /teamwork/deletedTeams/microsoft.graph.getAllMessages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Get All Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/microsoft.graph.allMessages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels All Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/microsoft.graph.getAllMessages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Get All Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Messages Chat Message Replies Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/microsoft.graph.doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Does User Have Access"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"description": "Usage: userId='@userId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Does User Have Access"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"description": "Usage: tenantId='@tenantId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenantId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Does User Have Access"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"description": "Usage: userPrincipalName='@userPrincipalName'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userPrincipalName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Deleted Teams Deleted Team Channels Channel Does User Have Access"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/microsoft.graph.allMessages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels All Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/microsoft.graph.getAllMessages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Get All Messages"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Get All Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/microsoft.graph.doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Does User Have Access"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"description": "Usage: userId='@userId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Does User Have Access"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"description": "Usage: tenantId='@tenantId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenantId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Does User Have Access"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"description": "Usage: userPrincipalName='@userPrincipalName'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userPrincipalName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Channels Channel Does User Have Access"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Delta"
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
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/microsoft.graph.doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Does User Have Access"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"description": "Usage: userId='@userId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Does User Have Access"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"description": "Usage: tenantId='@tenantId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenantId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Does User Have Access"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"description": "Usage: userPrincipalName='@userPrincipalName'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "userPrincipalName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Functions"
					],
					"operation": [
						"Teamwork Team Templates Team Template Definitions Team Template Definition Team Definition Primary Channel Does User Have Access"
					]
				}
			}
		},
];
