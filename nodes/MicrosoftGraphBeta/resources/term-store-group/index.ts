import type { INodeProperties } from 'n8n-workflow';

export const termStoreGroupDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					]
				}
			},
			"options": [
				{
					"name": "Term Store List Groups",
					"value": "Term Store List Groups",
					"action": "List groups",
					"description": "Get the list of group objects of a store",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups"
						}
					}
				},
				{
					"name": "Term Store Create Groups",
					"value": "Term Store Create Groups",
					"action": "Create group",
					"description": "Create a new group object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/termStore/groups"
						}
					}
				},
				{
					"name": "Term Store Delete Groups",
					"value": "Term Store Delete Groups",
					"action": "Delete navigation property groups for termStore",
					"description": "Delete navigation property groups for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Get Groups",
					"value": "Term Store Get Groups",
					"action": "Get groups from termStore",
					"description": "Collection of all groups available in the term store.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Update Groups",
					"value": "Term Store Update Groups",
					"action": "Update the navigation property groups in termStore",
					"description": "Update the navigation property groups in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups List Sets",
					"value": "Term Store Groups List Sets",
					"action": "List sets",
					"description": "Get a list of the set objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets"
						}
					}
				},
				{
					"name": "Term Store Groups Create Sets",
					"value": "Term Store Groups Create Sets",
					"action": "Create new navigation property to sets for termStore",
					"description": "Create new navigation property to sets for termStore",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets"
						}
					}
				},
				{
					"name": "Term Store Groups Delete Sets",
					"value": "Term Store Groups Delete Sets",
					"action": "Delete navigation property sets for termStore",
					"description": "Delete navigation property sets for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Get Sets",
					"value": "Term Store Groups Get Sets",
					"action": "Get sets from termStore",
					"description": "All sets under the group in a term [store].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Update Sets",
					"value": "Term Store Groups Update Sets",
					"action": "Update the navigation property sets in termStore",
					"description": "Update the navigation property sets in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets List Children",
					"value": "Term Store Groups Sets List Children",
					"action": "List children",
					"description": "Get the first level children of a [set] or [term] resource using the children navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Create Children",
					"value": "Term Store Groups Sets Create Children",
					"action": "Create term",
					"description": "Create a new term object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Delete Children",
					"value": "Term Store Groups Sets Delete Children",
					"action": "Delete navigation property children for termStore",
					"description": "Delete navigation property children for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Get Children",
					"value": "Term Store Groups Sets Get Children",
					"action": "Get children from termStore",
					"description": "Children terms of set in term [store].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Update Children",
					"value": "Term Store Groups Sets Update Children",
					"action": "Update the navigation property children in termStore",
					"description": "Update the navigation property children in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children List Children",
					"value": "Term Store Groups Sets Children List Children",
					"action": "Get children from termStore",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Create Children",
					"value": "Term Store Groups Sets Children Create Children",
					"action": "Create new navigation property to children for termStore",
					"description": "Create new navigation property to children for termStore",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Delete Children",
					"value": "Term Store Groups Sets Children Delete Children",
					"action": "Delete navigation property children for termStore",
					"description": "Delete navigation property children for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Get Children",
					"value": "Term Store Groups Sets Children Get Children",
					"action": "Get children from termStore",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Update Children",
					"value": "Term Store Groups Sets Children Update Children",
					"action": "Update the navigation property children in termStore",
					"description": "Update the navigation property children in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Children List Relations",
					"value": "Term Store Groups Sets Children Children List Relations",
					"action": "Get relations from termStore",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Children Create Relations",
					"value": "Term Store Groups Sets Children Children Create Relations",
					"action": "Create new navigation property to relations for termStore",
					"description": "Create new navigation property to relations for termStore",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Children Delete Relations",
					"value": "Term Store Groups Sets Children Children Delete Relations",
					"action": "Delete navigation property relations for termStore",
					"description": "Delete navigation property relations for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Children Get Relations",
					"value": "Term Store Groups Sets Children Children Get Relations",
					"action": "Get relations from termStore",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Children Update Relations",
					"value": "Term Store Groups Sets Children Children Update Relations",
					"action": "Update the navigation property relations in termStore",
					"description": "Update the navigation property relations in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Children Relations Get From Term",
					"value": "Term Store Groups Sets Children Children Relations Get From Term",
					"action": "Get fromTerm from termStore",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Children Relations Get Set",
					"value": "Term Store Groups Sets Children Children Relations Get Set",
					"action": "Get set from termStore",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Children Relations Get To Term",
					"value": "Term Store Groups Sets Children Children Relations Get To Term",
					"action": "Get toTerm from termStore",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Children Get Set",
					"value": "Term Store Groups Sets Children Children Get Set",
					"action": "Get set from termStore",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/set"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children List Relations",
					"value": "Term Store Groups Sets Children List Relations",
					"action": "Get relations from termStore",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Create Relations",
					"value": "Term Store Groups Sets Children Create Relations",
					"action": "Create new navigation property to relations for termStore",
					"description": "Create new navigation property to relations for termStore",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Delete Relations",
					"value": "Term Store Groups Sets Children Delete Relations",
					"action": "Delete navigation property relations for termStore",
					"description": "Delete navigation property relations for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Get Relations",
					"value": "Term Store Groups Sets Children Get Relations",
					"action": "Get relations from termStore",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Update Relations",
					"value": "Term Store Groups Sets Children Update Relations",
					"action": "Update the navigation property relations in termStore",
					"description": "Update the navigation property relations in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Relations Get From Term",
					"value": "Term Store Groups Sets Children Relations Get From Term",
					"action": "Get fromTerm from termStore",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Relations Get Set",
					"value": "Term Store Groups Sets Children Relations Get Set",
					"action": "Get set from termStore",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Relations Get To Term",
					"value": "Term Store Groups Sets Children Relations Get To Term",
					"action": "Get toTerm from termStore",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Children Get Set",
					"value": "Term Store Groups Sets Children Get Set",
					"action": "Get set from termStore",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/set"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Delete Parent Group",
					"value": "Term Store Groups Sets Delete Parent Group",
					"action": "Delete navigation property parentGroup for termStore",
					"description": "Delete navigation property parentGroup for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/parentGroup"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Get Parent Group",
					"value": "Term Store Groups Sets Get Parent Group",
					"action": "Get parentGroup from termStore",
					"description": "The parent [group] that contains the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/parentGroup"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Update Parent Group",
					"value": "Term Store Groups Sets Update Parent Group",
					"action": "Update the navigation property parentGroup in termStore",
					"description": "Update the navigation property parentGroup in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/parentGroup"
						}
					}
				},
				{
					"name": "Term Store Groups Sets List Relations",
					"value": "Term Store Groups Sets List Relations",
					"action": "List relations",
					"description": "Get the different relation of a [term] or [set] from the relations navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Create Relations",
					"value": "Term Store Groups Sets Create Relations",
					"action": "Create new navigation property to relations for termStore",
					"description": "Create new navigation property to relations for termStore",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Delete Relations",
					"value": "Term Store Groups Sets Delete Relations",
					"action": "Delete navigation property relations for termStore",
					"description": "Delete navigation property relations for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Get Relations",
					"value": "Term Store Groups Sets Get Relations",
					"action": "Get relations from termStore",
					"description": "Indicates which terms have been pinned or reused directly under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Update Relations",
					"value": "Term Store Groups Sets Update Relations",
					"action": "Update the navigation property relations in termStore",
					"description": "Update the navigation property relations in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Relations Get From Term",
					"value": "Term Store Groups Sets Relations Get From Term",
					"action": "Get fromTerm from termStore",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Relations Get Set",
					"value": "Term Store Groups Sets Relations Get Set",
					"action": "Get set from termStore",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Relations Get To Term",
					"value": "Term Store Groups Sets Relations Get To Term",
					"action": "Get toTerm from termStore",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Term Store Groups Sets List Terms",
					"value": "Term Store Groups Sets List Terms",
					"action": "Get terms from termStore",
					"description": "All the terms under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Create Terms",
					"value": "Term Store Groups Sets Create Terms",
					"action": "Create new navigation property to terms for termStore",
					"description": "Create new navigation property to terms for termStore",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Delete Terms",
					"value": "Term Store Groups Sets Delete Terms",
					"action": "Delete navigation property terms for termStore",
					"description": "Delete navigation property terms for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Get Terms",
					"value": "Term Store Groups Sets Get Terms",
					"action": "Get terms from termStore",
					"description": "All the terms under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Update Terms",
					"value": "Term Store Groups Sets Update Terms",
					"action": "Update the navigation property terms in termStore",
					"description": "Update the navigation property terms in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms List Children",
					"value": "Term Store Groups Sets Terms List Children",
					"action": "Get children from termStore",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Create Children",
					"value": "Term Store Groups Sets Terms Create Children",
					"action": "Create new navigation property to children for termStore",
					"description": "Create new navigation property to children for termStore",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Delete Children",
					"value": "Term Store Groups Sets Terms Delete Children",
					"action": "Delete navigation property children for termStore",
					"description": "Delete navigation property children for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Get Children",
					"value": "Term Store Groups Sets Terms Get Children",
					"action": "Get children from termStore",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Update Children",
					"value": "Term Store Groups Sets Terms Update Children",
					"action": "Update the navigation property children in termStore",
					"description": "Update the navigation property children in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Children List Relations",
					"value": "Term Store Groups Sets Terms Children List Relations",
					"action": "Get relations from termStore",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Children Create Relations",
					"value": "Term Store Groups Sets Terms Children Create Relations",
					"action": "Create new navigation property to relations for termStore",
					"description": "Create new navigation property to relations for termStore",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Children Delete Relations",
					"value": "Term Store Groups Sets Terms Children Delete Relations",
					"action": "Delete navigation property relations for termStore",
					"description": "Delete navigation property relations for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Children Get Relations",
					"value": "Term Store Groups Sets Terms Children Get Relations",
					"action": "Get relations from termStore",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Children Update Relations",
					"value": "Term Store Groups Sets Terms Children Update Relations",
					"action": "Update the navigation property relations in termStore",
					"description": "Update the navigation property relations in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Children Relations Get From Term",
					"value": "Term Store Groups Sets Terms Children Relations Get From Term",
					"action": "Get fromTerm from termStore",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Children Relations Get Set",
					"value": "Term Store Groups Sets Terms Children Relations Get Set",
					"action": "Get set from termStore",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Children Relations Get To Term",
					"value": "Term Store Groups Sets Terms Children Relations Get To Term",
					"action": "Get toTerm from termStore",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Children Get Set",
					"value": "Term Store Groups Sets Terms Children Get Set",
					"action": "Get set from termStore",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/set"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms List Relations",
					"value": "Term Store Groups Sets Terms List Relations",
					"action": "Get relations from termStore",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Create Relations",
					"value": "Term Store Groups Sets Terms Create Relations",
					"action": "Create new navigation property to relations for termStore",
					"description": "Create new navigation property to relations for termStore",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Delete Relations",
					"value": "Term Store Groups Sets Terms Delete Relations",
					"action": "Delete navigation property relations for termStore",
					"description": "Delete navigation property relations for termStore",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Get Relations",
					"value": "Term Store Groups Sets Terms Get Relations",
					"action": "Get relations from termStore",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Update Relations",
					"value": "Term Store Groups Sets Terms Update Relations",
					"action": "Update the navigation property relations in termStore",
					"description": "Update the navigation property relations in termStore",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Relations Get From Term",
					"value": "Term Store Groups Sets Terms Relations Get From Term",
					"action": "Get fromTerm from termStore",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Relations Get Set",
					"value": "Term Store Groups Sets Terms Relations Get Set",
					"action": "Get set from termStore",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Relations Get To Term",
					"value": "Term Store Groups Sets Terms Relations Get To Term",
					"action": "Get toTerm from termStore",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Term Store Groups Sets Terms Get Set",
					"value": "Term Store Groups Sets Terms Get Set",
					"action": "Get set from termStore",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/set"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /termStore/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store List Groups"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store List Groups"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store List Groups"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store List Groups"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store List Groups"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store List Groups"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store List Groups"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store List Groups"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store List Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Create Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Create Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Delete Groups"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Delete Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Get Groups"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Get Groups"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Get Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Update Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Update Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups List Sets"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups List Sets"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups List Sets"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups List Sets"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups List Sets"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups List Sets"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups List Sets"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups List Sets"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups List Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Create Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Create Sets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}/sets/{set-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Delete Sets"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Delete Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Get Sets"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Get Sets"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Get Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Update Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Update Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Delete Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Delete Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Get Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Get Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Delete Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Get Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Get Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Relations Get From Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Relations Get From Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Relations Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Relations Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Relations Get To Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Relations Get To Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Delete Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Get Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Get Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Relations Get From Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Relations Get From Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Relations Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Relations Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Relations Get To Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Relations Get To Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}/sets/{set-id}/parentGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Delete Parent Group"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Delete Parent Group"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/parentGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Parent Group"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Parent Group"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Parent Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/parentGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Update Parent Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/parentGroup<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Update Parent Group"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Delete Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Relations Get From Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Relations Get From Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Relations Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Relations Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Relations Get To Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Relations Get To Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Terms"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Terms"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Terms"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Terms"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Terms"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Terms"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Terms"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Terms"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets List Terms"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/terms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Create Terms"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/terms<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Create Terms"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Delete Terms"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Delete Terms"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Terms"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Terms"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Get Terms"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Update Terms"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Update Terms"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Delete Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Get Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Get Children"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Delete Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Get Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Get Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Relations Get From Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Relations Get From Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Relations Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Relations Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Relations Get To Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Relations Get To Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Delete Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Get Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Get Relations"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Relations Get From Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Relations Get From Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Relations Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Relations Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Relations Get To Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Relations Get To Term"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Get Set"
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
						"Term Store Group"
					],
					"operation": [
						"Term Store Groups Sets Terms Get Set"
					]
				}
			}
		},
];
