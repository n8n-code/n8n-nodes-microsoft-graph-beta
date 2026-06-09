import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementMacOsSoftwareUpdateAccountSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Mac OS Software Update Account Summaries",
					"value": "Device Management List Mac OS Software Update Account Summaries",
					"action": "Get macOSSoftwareUpdateAccountSummaries from deviceManagement",
					"description": "The MacOS software update account summaries for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries"
						}
					}
				},
				{
					"name": "Device Management Create Mac OS Software Update Account Summaries",
					"value": "Device Management Create Mac OS Software Update Account Summaries",
					"action": "Create new navigation property to macOSSoftwareUpdateAccountSummaries for deviceManagement",
					"description": "Create new navigation property to macOSSoftwareUpdateAccountSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries"
						}
					}
				},
				{
					"name": "Device Management Delete Mac OS Software Update Account Summaries",
					"value": "Device Management Delete Mac OS Software Update Account Summaries",
					"action": "Delete navigation property macOSSoftwareUpdateAccountSummaries for deviceManagement",
					"description": "Delete navigation property macOSSoftwareUpdateAccountSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Mac OS Software Update Account Summaries",
					"value": "Device Management Get Mac OS Software Update Account Summaries",
					"action": "Get macOSSoftwareUpdateAccountSummaries from deviceManagement",
					"description": "The MacOS software update account summaries for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Mac OS Software Update Account Summaries",
					"value": "Device Management Update Mac OS Software Update Account Summaries",
					"action": "Update the navigation property macOSSoftwareUpdateAccountSummaries in deviceManagement",
					"description": "Update the navigation property macOSSoftwareUpdateAccountSummaries in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Mac OS Software Update Account Summaries List Category Summaries",
					"value": "Device Management Mac OS Software Update Account Summaries List Category Summaries",
					"action": "Get categorySummaries from deviceManagement",
					"description": "Summary of the updates by category.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}/categorySummaries"
						}
					}
				},
				{
					"name": "Device Management Mac OS Software Update Account Summaries Create Category Summaries",
					"value": "Device Management Mac OS Software Update Account Summaries Create Category Summaries",
					"action": "Create new navigation property to categorySummaries for deviceManagement",
					"description": "Create new navigation property to categorySummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}/categorySummaries"
						}
					}
				},
				{
					"name": "Device Management Mac OS Software Update Account Summaries Delete Category Summaries",
					"value": "Device Management Mac OS Software Update Account Summaries Delete Category Summaries",
					"action": "Delete navigation property categorySummaries for deviceManagement",
					"description": "Delete navigation property categorySummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}/categorySummaries/{{$parameter[\"macOSSoftwareUpdateCategorySummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Mac OS Software Update Account Summaries Get Category Summaries",
					"value": "Device Management Mac OS Software Update Account Summaries Get Category Summaries",
					"action": "Get categorySummaries from deviceManagement",
					"description": "Summary of the updates by category.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}/categorySummaries/{{$parameter[\"macOSSoftwareUpdateCategorySummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Mac OS Software Update Account Summaries Update Category Summaries",
					"value": "Device Management Mac OS Software Update Account Summaries Update Category Summaries",
					"action": "Update the navigation property categorySummaries in deviceManagement",
					"description": "Update the navigation property categorySummaries in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}/categorySummaries/{{$parameter[\"macOSSoftwareUpdateCategorySummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Mac OS Software Update Account Summaries Category Summaries List Update State Summaries",
					"value": "Device Management Mac OS Software Update Account Summaries Category Summaries List Update State Summaries",
					"action": "Get updateStateSummaries from deviceManagement",
					"description": "Summary of the update states.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}/categorySummaries/{{$parameter[\"macOSSoftwareUpdateCategorySummary-id\"]}}/updateStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Mac OS Software Update Account Summaries Category Summaries Create Update State Summaries",
					"value": "Device Management Mac OS Software Update Account Summaries Category Summaries Create Update State Summaries",
					"action": "Create new navigation property to updateStateSummaries for deviceManagement",
					"description": "Create new navigation property to updateStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}/categorySummaries/{{$parameter[\"macOSSoftwareUpdateCategorySummary-id\"]}}/updateStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Mac OS Software Update Account Summaries Category Summaries Delete Update State Summaries",
					"value": "Device Management Mac OS Software Update Account Summaries Category Summaries Delete Update State Summaries",
					"action": "Delete navigation property updateStateSummaries for deviceManagement",
					"description": "Delete navigation property updateStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}/categorySummaries/{{$parameter[\"macOSSoftwareUpdateCategorySummary-id\"]}}/updateStateSummaries/{{$parameter[\"macOSSoftwareUpdateStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Mac OS Software Update Account Summaries Category Summaries Get Update State Summaries",
					"value": "Device Management Mac OS Software Update Account Summaries Category Summaries Get Update State Summaries",
					"action": "Get updateStateSummaries from deviceManagement",
					"description": "Summary of the update states.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}/categorySummaries/{{$parameter[\"macOSSoftwareUpdateCategorySummary-id\"]}}/updateStateSummaries/{{$parameter[\"macOSSoftwareUpdateStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Mac OS Software Update Account Summaries Category Summaries Update Update State Summaries",
					"value": "Device Management Mac OS Software Update Account Summaries Category Summaries Update Update State Summaries",
					"action": "Update the navigation property updateStateSummaries in deviceManagement",
					"description": "Update the navigation property updateStateSummaries in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/macOSSoftwareUpdateAccountSummaries/{{$parameter[\"macOSSoftwareUpdateAccountSummary-id\"]}}/categorySummaries/{{$parameter[\"macOSSoftwareUpdateCategorySummary-id\"]}}/updateStateSummaries/{{$parameter[\"macOSSoftwareUpdateStateSummary-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/macOSSoftwareUpdateAccountSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management List Mac OS Software Update Account Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management List Mac OS Software Update Account Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management List Mac OS Software Update Account Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management List Mac OS Software Update Account Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management List Mac OS Software Update Account Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management List Mac OS Software Update Account Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management List Mac OS Software Update Account Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management List Mac OS Software Update Account Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management List Mac OS Software Update Account Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/macOSSoftwareUpdateAccountSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Create Mac OS Software Update Account Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/macOSSoftwareUpdateAccountSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Create Mac OS Software Update Account Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Delete Mac OS Software Update Account Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Delete Mac OS Software Update Account Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Get Mac OS Software Update Account Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Get Mac OS Software Update Account Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Get Mac OS Software Update Account Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Update Mac OS Software Update Account Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Update Mac OS Software Update Account Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries List Category Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries List Category Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries List Category Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries List Category Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries List Category Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries List Category Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries List Category Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries List Category Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries List Category Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Create Category Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Create Category Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Delete Category Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Delete Category Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Get Category Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Get Category Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Get Category Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Update Category Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Update Category Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries List Update State Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries List Update State Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries List Update State Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries List Update State Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries List Update State Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries List Update State Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries List Update State Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries List Update State Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries List Update State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries Create Update State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries Create Update State Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries Delete Update State Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries Delete Update State Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries Get Update State Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries Get Update State Summaries"
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
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries Get Update State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries Update Update State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mac OS Software Update Account Summary"
					],
					"operation": [
						"Device Management Mac OS Software Update Account Summaries Category Summaries Update Update State Summaries"
					]
				}
			}
		},
];
